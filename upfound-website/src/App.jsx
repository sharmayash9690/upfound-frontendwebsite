
import './App.css';


function App() {
  return (
    <main className="website">
      <section className="hero">

        {}
        <header className="navbar">
          <a href="#home" className="logo">
            <span className="logo-icon">◈</span>
            <span>UpFound</span>
          </a>

          <nav className="nav-links">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services⌄</a>
            <a href="#pricing">Pricing</a>
            <a href="#solution">Solution</a>
            <button className="language">◎ English⌄</button>
          </nav>

          <button className="login-btn">
            Login / Register
          </button>
        </header>

        {}
        <h1 className="background-title">
          Legacy Bank
        </h1>

        {} 
        <div className="hero-content">
          <p className="eyebrow">FUEL FOR</p>
          <h2>STARTUPS</h2>

          <p className="description">
            Strategic guidance, funding support,
            and growth acceleration for early-stage ventures.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">
              Get Started
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {}
        <div className="center-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="bank-card">
            <span className="chip"></span>
            <span className="card-shine"></span>
          </div>

          <div className="crystal-base">
            <div className="base-top"></div>
          </div>
        </div>

        
        {/* Social icons */}
        <div className="social-links">
          <a href="https://instagram.com" aria-label="Instagram">
            <span className="social-letter instagram-letter">◎</span>
          </a>

          <a href="https://facebook.com" aria-label="Facebook">
            <span className="social-letter facebook-letter">f</span>
          </a>

          <a href="https://x.com" aria-label="X">
            <span className="social-letter">𝕏</span>
          </a>
        </div>


        {}
        <aside className="stats-card">
          <div className="stats-heading">
            <span>Launching Startups</span>
            <span>↗</span>
          </div>

          <div className="stats-main">
            <div>
              <p>83% <span>Success Rate</span></p>
              <p>17% <span>Failure Rate</span></p>
            </div>

            <div className="progress-circle">
              <span>86%</span>
              <small>Success</small>
            </div>
          </div>
        </aside>

        {}
        <a href="#about" className="scroll-indicator">
          <span>↓</span>
          <small>Scroll to<br />explore more</small>
        </a>

      </section>
    </main>
  );
}

export default App;
