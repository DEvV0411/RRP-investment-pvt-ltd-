import React from 'react';
import './StockTicker.css';

export default function StockTicker() {
  const stocks = [
    { symbol: 'SPX500', price: '5,123.40', change: '+1.2%', up: true },
    { symbol: 'NDX', price: '18,504.10', change: '+1.5%', up: true },
    { symbol: 'VIX', price: '13.40', change: '-4.2%', up: false },
    { symbol: 'GOLD', price: '2,145.60', change: '+0.8%', up: true },
    { symbol: 'BTC', price: '68,400.00', change: '+3.1%', up: true },
    { symbol: 'DXY', price: '103.80', change: '-0.1%', up: false },
    { symbol: 'USD/JPY', price: '148.50', change: '+0.2%', up: true },
    { symbol: 'BRENT', price: '82.40', change: '-0.5%', up: false },
    { symbol: 'NIFTY50', price: '22,450.80', change: '+0.9%', up: true },
    { symbol: 'BANKNIFTY', price: '47,900.20', change: '+1.1%', up: true }
  ];

  // Duplicate the array for a smooth infinite scroll effect
  const tickerItems = [...stocks, ...stocks];

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {tickerItems.map((stock, idx) => (
          <div key={idx} className="ticker-item">
            <span className="ticker-symbol">{stock.symbol}</span>
            <span className="ticker-price">{stock.price}</span>
            <span className={`ticker-change ${stock.up ? 'up' : 'down'}`}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
