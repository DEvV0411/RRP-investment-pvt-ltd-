import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import * as XLSX from 'xlsx';
import './Pages.css';
import { Download, Users, Briefcase, Mail } from 'lucide-react';

// Helper for sorting by newest first
const sortByTime = (a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0);

const DataTable = ({ data, onDelete, collectionName }) => {
  if (!data || data.length === 0) return <div style={{ color: '#94a3b8', padding: '4rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>No records found yet.</div>;
  
  // Get all unique keys from all objects to form table headers
  const allKeys = Array.from(new Set(data.flatMap(obj => Object.keys(obj)))).filter(k => !['id', 'timestamp', 'resumeUrl', 'dateSubmitted'].includes(k));
  
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid rgba(212,175,55,0.3)' }}>
          <th style={{ padding: '16px', color: '#d4af37', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold' }}>Date</th>
          {allKeys.map(key => (
            <th key={key} style={{ padding: '16px', color: '#d4af37', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold' }}>
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </th>
          ))}
          <th style={{ padding: '16px', color: '#d4af37', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold' }}>Resume</th>
          <th style={{ padding: '16px', color: '#ef4444', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold', textAlign: 'right' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', transition: 'background-color 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}>
            <td style={{ padding: '16px', color: '#94a3b8', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              {row.timestamp?.seconds ? new Date(row.timestamp.seconds * 1000).toLocaleDateString() : 'N/A'}
            </td>
            {allKeys.map(key => (
              <td key={key} style={{ padding: '16px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                {row[key] || '-'}
              </td>
            ))}
            <td style={{ padding: '16px', fontSize: '0.9rem' }}>
              {row.resumeUrl ? (
                <a href={row.resumeUrl} target="_blank" rel="noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>View File</a>
              ) : (
                <span style={{ color: '#64748b' }}>None</span>
              )}
            </td>
            <td style={{ padding: '16px', textAlign: 'right' }}>
              <button onClick={() => onDelete(collectionName, row.id)} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold' }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
    if (window.confirm("Are you sure you want to permanently delete this record?")) {
      try {
        await deleteDoc(doc(db, collectionName, id));
        if (collectionName === 'career_applications') setCareersData(prev => prev.filter(d => d.id !== id));
        if (collectionName === 'internship_applications') setInternsData(prev => prev.filter(d => d.id !== id));
        if (collectionName === 'contact_inquiries') setContactData(prev => prev.filter(d => d.id !== id));
      } catch (err) {
        console.error("Error deleting document: ", err);
        alert("Failed to delete the record.");
      }
    }
  };

  const handleExport = () => {
    // Format timestamps for Excel
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

    const wsCareers = XLSX.utils.json_to_sheet(formatData(careersData));
    XLSX.utils.book_append_sheet(wb, wsCareers, "Careers");

    const wsInterns = XLSX.utils.json_to_sheet(formatData(internsData));
    XLSX.utils.book_append_sheet(wb, wsInterns, "Internships");

    const wsContact = XLSX.utils.json_to_sheet(formatData(contactData));
    XLSX.utils.book_append_sheet(wb, wsContact, "Contact Inquiries");

    XLSX.writeFile(wb, "RRP_Administrative_Export.xlsx");
  };

  return (
    <div className="page-wrapper pb-24">
      <div className="container relative z-10">
        
        <div className="page-header mt-12 mb-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
          <div>

            <h1 className="page-title" style={{ textAlign: 'left', margin: 0 }}>Executive Dashboard</h1>
          </div>
          <button 
            onClick={handleExport} 
            className="btn-gold-solid" 
            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px -5px rgba(212,175,55,0.4)', transition: 'transform 0.2s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Download size={22} />
            Export to Excel
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2.5rem', overflowX: 'auto' }}>
          <button 
            onClick={() => setActiveTab('careers')}
            style={{ padding: '16px 32px', background: activeTab === 'careers' ? 'rgba(212,175,55,0.1)' : 'transparent', color: activeTab === 'careers' ? '#d4af37' : '#94a3b8', border: 'none', borderBottom: activeTab === 'careers' ? '3px solid #d4af37' : '3px solid transparent', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s', borderRadius: '8px 8px 0 0' }}
          >
            <Briefcase size={20} /> Careers <span style={{ background: activeTab === 'careers' ? '#d4af37' : 'rgba(255,255,255,0.1)', color: activeTab === 'careers' ? 'black' : '#cbd5e1', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', marginLeft: '4px' }}>{careersData.length}</span>
          </button>
          <button 
            onClick={() => setActiveTab('interns')}
            style={{ padding: '16px 32px', background: activeTab === 'interns' ? 'rgba(212,175,55,0.1)' : 'transparent', color: activeTab === 'interns' ? '#d4af37' : '#94a3b8', border: 'none', borderBottom: activeTab === 'interns' ? '3px solid #d4af37' : '3px solid transparent', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s', borderRadius: '8px 8px 0 0' }}
          >
            <Users size={20} /> Internships <span style={{ background: activeTab === 'interns' ? '#d4af37' : 'rgba(255,255,255,0.1)', color: activeTab === 'interns' ? 'black' : '#cbd5e1', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', marginLeft: '4px' }}>{internsData.length}</span>
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            style={{ padding: '16px 32px', background: activeTab === 'contact' ? 'rgba(212,175,55,0.1)' : 'transparent', color: activeTab === 'contact' ? '#d4af37' : '#94a3b8', border: 'none', borderBottom: activeTab === 'contact' ? '3px solid #d4af37' : '3px solid transparent', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s', borderRadius: '8px 8px 0 0' }}
          >
            <Mail size={20} /> Inquiries <span style={{ background: activeTab === 'contact' ? '#d4af37' : 'rgba(255,255,255,0.1)', color: activeTab === 'contact' ? 'black' : '#cbd5e1', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', marginLeft: '4px' }}>{contactData.length}</span>
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '6rem', color: '#94a3b8', fontSize: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '40px', height: '40px', border: '3px solid rgba(212,175,55,0.3)', borderTopColor: '#d4af37', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 1.5rem' }}></div>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            Aggregating secure data...
          </div>
        ) : (
          <div className="fin-card" style={{ padding: '0', overflowX: 'auto', borderTop: '4px solid #d4af37', borderRadius: '12px' }}>
            {activeTab === 'careers' && <DataTable data={careersData} onDelete={handleDelete} collectionName="career_applications" />}
            {activeTab === 'interns' && <DataTable data={internsData} onDelete={handleDelete} collectionName="internship_applications" />}
            {activeTab === 'contact' && <DataTable data={contactData} onDelete={handleDelete} collectionName="contact_inquiries" />}
          </div>
        )}
      </div>
    </div>
  );
}
