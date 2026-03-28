import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import * as XLSX from 'xlsx';
import './Pages.css';
import { Download, Users, Briefcase, Mail, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper for sorting by newest first
const sortByTime = (a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0);

const DataTable = ({ data, onDelete, collectionName }) => {
  if (!data || data.length === 0) return <div style={{ color: '#5a9090', padding: '6rem 2rem', textAlign: 'center', background: '#f8fcfc', borderRadius: '12px', border: '1px dashed rgba(0, 109, 109, 0.2)', fontWeight: 300 }}>No records found in this category yet.</div>;
  
  const allKeys = Array.from(new Set(data.flatMap(obj => Object.keys(obj)))).filter(k => !['id', 'timestamp', 'resumeUrl', 'dateSubmitted'].includes(k));
  
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid rgba(0, 109, 109, 0.08)', background: '#f0fcfc' }}>
            <th style={{ padding: '20px 16px', color: '#006D6D', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 800 }}>Submission Date</th>
            {allKeys.map(key => (
              <th key={key} style={{ padding: '20px 16px', color: '#006D6D', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 800 }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </th>
            ))}
            <th style={{ padding: '20px 16px', color: '#006D6D', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 800 }}>Document</th>
            <th style={{ padding: '20px 16px', color: '#ef4444', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 800, textAlign: 'right' }}>Management</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} style={{ borderBottom: '1px solid rgba(0, 109, 109, 0.05)', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#f8fcfc'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <td style={{ padding: '16px', color: '#5a9090', fontSize: '0.9rem', fontWeight: 500 }}>
                {row.timestamp?.seconds ? new Date(row.timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}
              </td>
              {allKeys.map(key => (
                <td key={key} style={{ padding: '16px', color: '#011f1f', fontSize: '0.92rem', fontWeight: 400 }}>
                  {row[key] || '-'}
                </td>
              ))}
              <td style={{ padding: '16px' }}>
                {row.resumeUrl ? (
                  <a href={row.resumeUrl} target="_blank" rel="noreferrer" style={{ color: '#006D6D', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>View Resume</a>
                ) : (
                  <span style={{ color: '#a0afaf', fontSize: '0.85rem' }}>No Attachment</span>
                )}
              </td>
              <td style={{ padding: '16px', textAlign: 'right' }}>
                <button 
                  onClick={() => onDelete(collectionName, row.id)} 
                  style={{ background: 'transparent', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                  onMouseOver={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.borderColor = '#ef4444'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.2)'; }}
                >
                  <Trash2 size={14} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('careers');
  const [careersData, setCareersData] = useState([]);
  const [internsData, setInternsData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const careersSnap = await getDocs(collection(db, "career_applications"));
        const internsSnap = await getDocs(collection(db, "internship_applications"));
        const contactSnap = await getDocs(collection(db, "contact_inquiries"));

        setCareersData(careersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(sortByTime));
        setInternsData(internsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(sortByTime));
        setContactData(contactSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })).sort(sortByTime));
      } catch (err) {
        console.error("Error fetching admin data: ", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (collectionName, id) => {
    if (window.confirm("Are you sure you want to permanently delete this record? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, collectionName, id));
        if (collectionName === 'career_applications') setCareersData(prev => prev.filter(d => d.id !== id));
        if (collectionName === 'internship_applications') setInternsData(prev => prev.filter(d => d.id !== id));
        if (collectionName === 'contact_inquiries') setContactData(prev => prev.filter(d => d.id !== id));
      } catch (err) {
        console.error("Error deleting document: ", err);
        alert("Institutional security protocol: Failed to delete the record.");
      }
    }
  };

  const handleExport = () => {
    const formatData = (data) => data.map(item => {
      const formatted = { ...item };
      if (formatted.timestamp && formatted.timestamp.seconds) {
        formatted.dateSubmitted = new Date(formatted.timestamp.seconds * 1000).toLocaleString();
      }
      delete formatted.timestamp;
      delete formatted.id;
      return formatted;
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(formatData(careersData)), "Careers");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(formatData(internsData)), "Internships");
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(formatData(contactData)), "Contact Inquiries");
    XLSX.writeFile(wb, "RRP_Admin_Records_Export.xlsx");
  };

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        
        <div className="page-header mt-12 mb-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="text-center md:text-left">
            <span className="section-subtitle">Management Console</span>
            <h1 className="page-title mt-2 mb-0" style={{ fontSize: '2.5rem' }}>Executive Dashboard</h1>
          </div>
          <button 
            onClick={handleExport} 
            className="btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #006D6D 0%, #005858 100%)', color: 'white', boxShadow: '0 8px 24px rgba(0, 109, 109, 0.25)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Download size={20} />
            Export Audit Data
          </button>
        </div>

        {/* Custom Tabs */}
        <div style={{ display: 'flex', gap: '0.25rem', borderBottom: '1px solid rgba(0, 109, 109, 0.1)', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '2px' }} className="no-scrollbar">
          {[
            { id: 'careers', label: 'Careers', icon: Briefcase, count: careersData.length },
            { id: 'interns', label: 'Internships', icon: Users, count: internsData.length },
            { id: 'contact', label: 'Inquiries', icon: Mail, count: contactData.length }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                padding: '16px 24px', 
                background: activeTab === tab.id ? '#f0fcfc' : 'transparent', 
                color: activeTab === tab.id ? '#006D6D' : '#5a9090', 
                border: 'none', 
                borderBottom: activeTab === tab.id ? '3px solid #006D6D' : '3px solid transparent', 
                fontWeight: 800, 
                fontSize: '0.95rem', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                transition: 'all 0.2s', 
                borderRadius: '8px 8px 0 0',
                whiteSpace: 'nowrap'
              }}
            >
              <tab.icon size={18} /> {tab.label} 
              <span style={{ background: activeTab === tab.id ? '#006D6D' : 'rgba(0, 109, 109, 0.1)', color: activeTab === tab.id ? 'white' : '#006D6D', padding: '2px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 900 }}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '8rem', color: '#5a9090', background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0, 109, 109, 0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
             <div style={{ width: '40px', height: '40px', border: '3px solid rgba(0, 109, 109, 0.1)', borderTopColor: '#006D6D', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 2rem' }}></div>
             <p style={{ fontWeight: 300, fontSize: '1.2rem', letterSpacing: '1px' }}>Aggregating secure data...</p>
             <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} className="fin-card" style={{ padding: '0', overflow: 'hidden', borderTop: '4px solid #006D6D', borderRadius: '12px', background: '#ffffff', boxShadow: '0 10px 40px rgba(0, 109, 109, 0.08)' }}>
            {activeTab === 'careers' && <DataTable data={careersData} onDelete={handleDelete} collectionName="career_applications" />}
            {activeTab === 'interns' && <DataTable data={internsData} onDelete={handleDelete} collectionName="internship_applications" />}
            {activeTab === 'contact' && <DataTable data={contactData} onDelete={handleDelete} collectionName="contact_inquiries" />}
          </motion.div>
        )}
      </div>
    </div>
  );
}
