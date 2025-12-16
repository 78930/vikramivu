import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import ITConsulting from './pages/ITConsulting';
import ITServices from './pages/IT services';
import RCMServices from './pages/RCMServices';
import Semi from './pages/Semiconductors';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
         <Route path="/IT services" element={<ITServices />} />
         <Route path="/RCM services" element={<RCMServices />} />
         <Route path="/IT Consulting" element={<ITConsulting />} />
         <Route path="/Semi conductors" element={<Semi />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
