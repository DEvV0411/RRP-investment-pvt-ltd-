import './index.css';

export function Hero() {
  return (
    <section className="hero">
      <h1>Elevate Your Wealth</h1>
      <p>Premium investment strategies tailored for the modern institutional and private investor. Experience unparalleled growth and security with RRP Investments LTD.</p>
      <button className="btn" onClick={() => alert('Exploration started!')}>Explore Strategies</button>
    </section>
  );
}
