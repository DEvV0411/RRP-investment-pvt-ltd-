import './index.css';

export function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">RRP INVESTMENTS</a>
      <nav className="header-nav">
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
