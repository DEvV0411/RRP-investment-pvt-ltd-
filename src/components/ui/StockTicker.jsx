import { useEffect, useRef } from 'react';

export default function StockTicker() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // Clear any previous widget
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'NSE:NIFTY', title: 'Nifty 50' },
        { proName: 'BSE:SENSEX', title: 'Sensex' },
        { proName: 'NSE:BANKNIFTY', title: 'Bank Nifty' },
        { proName: 'NSE:RELIANCE', title: 'Reliance' },
        { proName: 'NSE:TCS', title: 'TCS' },
        { proName: 'NSE:INFY', title: 'Infosys' },
        { proName: 'NSE:HDFCBANK', title: 'HDFC Bank' },
        { proName: 'NSE:ICICIBANK', title: 'ICICI Bank' },
        { proName: 'COMEX:GC1!', title: 'Gold' },
        { proName: 'COMEX:SI1!', title: 'Silver' },
        { proName: 'NYMEX:CL1!', title: 'Crude Oil' },
        { proName: 'FX_IDC:USDINR', title: 'USD/INR' },
        { proName: 'CRYPTO:BTCUSD', title: 'Bitcoin' },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'regular',
      colorTheme: 'dark',
      locale: 'en',
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '46px',
        background: 'rgba(4, 6, 12, 0.98)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        zIndex: 1000,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* LIVE badge */}
      <div style={{
        flexShrink: 0,
        background: '#ef4444',
        color: 'white',
        fontSize: '0.65rem',
        fontWeight: 900,
        letterSpacing: '2px',
        padding: '3px 9px',
        borderRadius: '4px',
        marginLeft: '12px',
        marginRight: '8px',
        animation: 'liveFlash 1.5s ease-in-out infinite',
        whiteSpace: 'nowrap',
      }}>LIVE</div>

      {/* TradingView widget container */}
      <div
        ref={containerRef}
        className="tradingview-widget-container"
        style={{ flex: 1, height: '44px', overflow: 'hidden' }}
      >
        <div className="tradingview-widget-container__widget" style={{ height: '44px' }} />

      </div>
    </div>
  );
}
