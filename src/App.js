import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PracticeArea from './components/PracticeArea';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import NewsAndInsights from './components/NewsAndInsights';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Blog1 from './components/blog1';

import logo from './image/logo.png';

import './styles.css';
function App() {
  return (
    <Router>
      <div>
        <header>
        <Link to="/home">
          <div className="logo">
            <img src={logo} alt="Neeti Legal Logo" width="130" height="130"></img>
          </div>
          </Link>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/practice-area">Practice Area</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/practice-area" element={<PracticeArea />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/news-and-insights" element={<NewsAndInsights/>} />
          <Route path="/news-and-insights/why-does-every-business-need-an-outsourced-legal-department?" element={<Blog1/>} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
