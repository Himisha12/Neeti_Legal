import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PracticeArea from './components/PracticeArea';
import ContactUs from './components/ContactUs';
// import Careers from './components/Careers';
import NewsAndInsights from './components/NewsAndInsights';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import Blog1 from './components/blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';

import logo from './image/logo.png';

import './styles.css';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function App() {
  return (
    <Router>
      <div>
        <header>
        <Link to="/home">
          <div className="logo">
            <img src={logo} alt="Neeti Legal Logo" width="220" height="70"></img>
          </div>
          </Link>
          <nav>
            <Link to="/home" onClick={scrollToTop}>Home</Link>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <Link to="/practice-area" onClick={scrollToTop}>Practice Area</Link>
            <Link to="/contact-us" onClick={scrollToTop}>Contact Us</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/practice-area" element={<PracticeArea />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/careers" element={<Careers/>} /> */}
          <Route path="/news-and-insights" element={<NewsAndInsights/>} />
          <Route path="/news-and-insights/why-does-every-business-need-an-outsourced-legal-department?" element={<Blog1/>} /> 
          <Route path="/news-and-insights/five-signs-your-business-needs-legal-assistance-right-now" element={<Blog2/>} />
          <Route path="/news-and-insights/debunking-myths:can-small-business-afford-a-legal-team?" element={<Blog3/>} />
          <Route path="/news-and-insights/resolving-payment-disputes-for-MSMES:why-online-dispute-resoltuion-is-the-need-of-the-hour" element={<Blog4/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-of-use" element={<TermsOfUse/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
