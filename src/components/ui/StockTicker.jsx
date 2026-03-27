import { useEffect, useRef } from 'react';

export default function StockTicker({ variant = 'bottom' }) {
  const containerRef = useRef(null);
  const isTop = variant === 'top';

  useEffect(() => {
    if (!containerRef.current) return;
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
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'FX_IDC:USDINR', title: 'USD/INR' },
        { proName: 'TVC:GOLD', title: 'Gold' },
        { proName: 'TVC:SILVER', title: 'Silver' },
        { proName: 'TVC:USOIL', title: 'Crude Oil' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: isTop ? 'light' : 'dark',
      locale: 'en',
    });

    containerRef.current.appendChild(script);
  }, [variant, isTop]);

  const wrapperStyle = isTop ? {
    flex: 1,
    height: '46px',
    background: 'transparent',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '2rem'
  } : {
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
  };

  return (
    <div style={wrapperStyle}>
      <div style={{
        flexShrink: 0,
        background: '#ef4444',
        color: 'white',
        fontSize: '0.6rem',
        fontWeight: 900,
        letterSpacing: '1px',
        padding: '2px 8px',
        borderRadius: '4px',
        marginLeft: isTop ? '0' : '12px',
        marginRight: '8px',
        animation: 'liveFlash 2s ease-in-out infinite',
        whiteSpace: 'nowrap',
      }}>LIVE MARKETS</div>

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
