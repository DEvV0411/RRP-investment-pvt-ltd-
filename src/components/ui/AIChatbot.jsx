import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const SYSTEM_PROMPT = `You are the official AI Assistant for RRP Investments Private Limited. Your tone should be highly professional, concise, and helpful. 
RRP Investments is an institutional trading firm specializing in algorithmic trading and quantitative strategies. 
Key information:
- HQ: Mumbai, Maharashtra, India.
- Email: desk@rrpinvestments.in (General Info), hr@rrpinvestments.in (Careers/Internships).
- Trading Hours: Monday to Friday: 9:15 AM - 3:30 PM IST (NSE/BSE Market Hours).
- Phone: +91 (22) 1234-5678.
- Careers: We actively hire quantitative analysts, software engineers, and interns via the 'Careers' or 'Internships' section on our site.
If the user asks a severely off-topic question not related to finance, trading, or careers at RRP, politely redirect them. Do not hallucinate external links.`;

const FAQs = [
  "What are your trading hours?",
  "How do I apply for an internship?",
  "What is your contact email?"
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the RRP Investments Virtual Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  const handleSend = async (text) => {
    const userMessage = text || input.trim();
    if (!userMessage) return;

    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", // Lightning fast 70x parameter model on Groq LPU
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages
          ],
          temperature: 0.5,
          max_tokens: 500
        })
      });

      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages((prev) => [...prev, { role: 'assistant', content: botReply }]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages((prev) => [...prev, { role: 'assistant', content: "I'm sorry, I'm currently unable to connect to my secure servers. Please try again later or contact desk@rrpinvestments.in directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px -5px rgba(212,175,55,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={32} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: isMinimized ? '2rem' : '2rem',
              right: '2rem',
              width: 'calc(100vw - 4rem)',
              maxWidth: '380px',
              height: isMinimized ? 'auto' : '600px',
              maxHeight: '85vh',
              background: 'rgba(15, 23, 42, 0.98)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px rgba(212,175,55,0.1)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 9999,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ padding: '16px 20px', background: 'linear-gradient(90deg, rgba(212,175,55,0.1) 0%, rgba(15, 23, 42, 1) 100%)', borderBottom: '1px solid rgba(212,175,55,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}>
                  <Bot size={22} />
                </div>
                <div>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>RRP Assistant</h3>
                  <p style={{ color: '#4ade80', margin: 0, fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 5px #4ade80' }}></span> Online
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => setIsMinimized(!isMinimized)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                  <X size={20} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {messages.map((msg, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: msg.role === 'user' ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'rgba(212,175,55,0.15)', color: msg.role === 'user' ? 'white' : '#d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: msg.role === 'user' ? 'none' : '1px solid rgba(212,175,55,0.4)' }}>
                        {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                      </div>
                      <div style={{ background: msg.role === 'user' ? '#2563eb' : 'rgba(255,255,255,0.03)', color: msg.role === 'user' ? 'white' : '#e2e8f0', padding: '14px 18px', borderRadius: msg.role === 'user' ? '20px 4px 20px 20px' : '4px 20px 20px 20px', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '80%', border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Bot size={18} />
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px 20px', borderRadius: '4px 20px 20px 20px', display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <motion.div animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '8px', height: '8px', background: '#d4af37', borderRadius: '50%' }} />
                        <motion.div animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} style={{ width: '8px', height: '8px', background: '#d4af37', borderRadius: '50%' }} />
                        <motion.div animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} style={{ width: '8px', height: '8px', background: '#d4af37', borderRadius: '50%' }} />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* FAQs */}
                {messages.length === 1 && (
                  <div style={{ padding: '0 20px 12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {FAQs.map((faq, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => handleSend(faq)}
                        style={{ background: 'rgba(212,175,55,0.08)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '24px', padding: '8px 14px', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseOver={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.2)'; e.currentTarget.style.borderColor = '#d4af37'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'; }}
                      >
                        {faq}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Area */}
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
                  style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '12px', alignItems: 'center' }}
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    disabled={isLoading}
                    style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '14px 20px', color: 'white', outline: 'none', fontSize: '0.95rem', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !input.trim()}
                    style={{ width: '46px', height: '46px', borderRadius: '50%', background: input.trim() ? 'linear-gradient(135deg, #d4af37 0%, #b48608 100%)' : 'rgba(255,255,255,0.1)', color: input.trim() ? 'black' : '#64748b', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default', transition: 'transform 0.2s', boxShadow: input.trim() ? '0 0 15px rgba(212,175,55,0.4)' : 'none' }}
                    onMouseOver={e => input.trim() && (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={e => input.trim() && (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Send size={18} style={{ marginLeft: '2px', position: 'relative', top: '1px' }} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
