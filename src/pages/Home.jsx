import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Business with Expert Solutions</h1>
          <p>IT Services | IT Consulting | Healthcare Solutions | Semiconductor </p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
          
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>IT Services</h3>
            <p>Enterprise solutions, cloud migration, and digital transformation.</p>
            <Link to="/IT services" className="cta-button">
             GET
             </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Healthcare RCM</h3>
            <p>Revenue Cycle Management and medical billing optimization.</p>
            <Link to="/RCM Services" className="cta-button">
             GET
             </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">🔌</div>
            <h3>Semiconductors</h3>
            <p>Embedded systems, IoT solutions, and hardware consulting.</p>
            <Link to="/Semi conductors" className="cta-button">
             GET
             </Link>
          </div>
          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>IT Consulting</h3>
            <p>Strategic business consulting and process optimization.</p>
            <Link to="/IT Consulting" className="cta-button">
             GET
             </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h4>✓ Expert Team</h4>
            <p>Experienced professionals with 10+ years in industry</p>
          </div>
          <div className="benefit">
            <h4>✓ Proven Results</h4>
            <p>100+ successful projects delivered</p>
          </div>
          <div className="benefit">
            <h4>✓ 24/7 Support</h4>
            <p>Round-the-clock customer support</p>
          </div>
          <div className="benefit">
            <h4>✓ Customized Solutions</h4>
            <p>Tailored to your specific needs</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <h2>Ready to Transform?</h2>
        <p>Let's discuss how we can help your business grow</p>
        <Link to="/contact" className="cta-button-white">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}

export default Home;
