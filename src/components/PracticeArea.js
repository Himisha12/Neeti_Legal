import React, { useState ,useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import Practice from '../image/practice1.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import gold from '../image/practice2.jpg';
import logo from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const PracticeArea = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [hoveredDisclaimer, setHoveredDisclaimer] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top-button');
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    zIndex: '1000',
  };

  const ContactModal = ({ onClose }) => {
    return (
      <div style={modalStyles} className="contact-modal">
        <p>Contact Numbers:</p>
        <p>Phone 1: <a href="http://wame.pro/1hav1o" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline',}}>+91 9694059074</a></p>
        <p>Phone 2: <a href="http://wame.pro/1hvl55" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline', }}>+91 9549378454</a></p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  const handlePhoneClick = () => {
    setShowContactModal(true);
  };
  
  const handleDisclaimerClick = () => {
    window.location.href = 'https://www.google.com';
  };
  const phoneButtonStyle = {
    margin: '10px',
    cursor: 'pointer',
    color: 'white',
  };

  const socialButtonHoverStyle = {
    transform: 'scale(1.2)', 
  };

  const socialButtonsStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom:'20px',
  };
  
  const socialButtonStyle = {
    margin: '10px',
    cursor: 'pointer',
    color: 'white',
  };

  const logoStyles = {
    width: '135px', // Adjust the width as needed
    height: 'auto',
    borderRadius: '8px',
    marginBottom: 'auto',
    marginLeft: '0%',
  };
  const disclaimerButtonStyles = {
    backgroundColor: hoveredDisclaimer ? '#d9d9d9' : '#d9d9d9',
    color: '#001f3f',
    padding: '10px 20px',
    fontSize: '1.2em',
    borderRadius: '8px',
    border: '2px solid white',
    fontFamily: 'Nanum Myeongjo, serif',
    cursor: 'pointer',
    marginTop: '5px',
    transition: 'background-color 0.3s ease, transform 0.3s ease', 
    transform: hoveredDisclaimer ? 'scale(1.1)' : 'scale(1)',
  };
  const footerSectionStyles = {
    backgroundColor: '#16214f',
    color: '#fff',
    // padding: '30px 0',
    textAlign: 'center',
    borderRadius:'10px',
    marginTop: '10px',
    marginRight:'1px',
    marginLeft: '1px'
  };

  const imageStyle = {
    width: '100%', // Cover the entire width of the slide
    height: '410px', // Cover the entire height of the slide
    objectFit: 'cover', // Ensure the image covers the entire slide
    backgroundColor: 'rgba(0, 0, 0, 0.9)', 
    borderRadius: '8px',
  };
  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '8px',
  };
  const overStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  }

  const sectionStyle = {
    backgroundColor: '#d5984e',
  };

  const goldImageStyle = {
    width: '100%',
    height: '200px', // Set the height to 200px
    objectFit: 'cover',
    position: 'relative',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    fontSize: '3em',
    fontWeight: 'bold',
    fontFamily: 'Nanum Myeongjo, serif',
    textAlign: 'center',
  };
  return (
    <>
    <section style={sectionStyle}>
      <div style={{ maxWidth: '1100px', margin: 'auto', borderRadius: '8px', fontFamily: 'Nanum Myeongjo, serif', }}>

        <Carousel>
          <Carousel.Item>
            <div style={overlayStyles}></div>
            <img src={Practice} alt="First slide" style={imageStyle} />
            <Carousel.Caption style={{ height: '20%', bottom: 'unset', top: '20%', transform: 'translateY(-50%)' }}>
              <h1>PRACTICE AREA</h1>
              <br></br>
              <br></br>
              <h3>Commercial Law Practice</h3>
              <p>Partnerships and Joint Ventures, Tenders, Foreign Collaborations, Memoranda of Understanding, Indemnity, Non-Disclosure, Lease, Sales and Purchase, Security/Pledge, Employment, Non-compete, Independent Contractors, Software Licensing, Technology Transfer, Strategic Alliance, Private Label, and IP Commercialization are all crucial facets of modern business and legal frameworks. These various contractual arrangements and agreements underpin the functioning of businesses, transactions, and collaborations across diverse industries and domains, serving as the legal bedrock for operations, innovation, and strategic growth.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={overlayStyles}></div>
            <img src={Practice} alt="Second slide" style={imageStyle} />
            <Carousel.Caption style={{ height: '20%', bottom: 'unset', top: '20%', transform: 'translateY(-50%)' }}>
              <h1>Practice Area</h1>
              <br></br>
              <br></br>
              <h3>Dispute Resolution</h3><br></br>
              <ul style={{ listStyleType: 'none', }}>
                <li>Arbitration</li><br></br>
                <li>Litigation</li><br></br>
                <li>White Collar Investigation</li>
              </ul>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={overlayStyles}></div>
            <img src={Practice} alt="Third slide" style={imageStyle} />
            <Carousel.Caption style={{ height: '20%', bottom: 'unset', top: '20%', transform: 'translateY(-50%)' }}>
              <h1>Practice Area</h1>
              <br>
              </br>
              <br></br>
              <h3>NCLT/IBC Practice</h3>
              <p>We represent Corporate clients in litigation proceedings under all aspects of Business and Corporate law in India before various courts and tribunals. We also act as Retainer Counsel on the Advisory Panels of various Software and Manufacturing companies.  We provide consultation in matters under the Insolvency and Bankruptcy Code, 2016 (IBC) and advise secured and unsecured creditors on various aspects of their claims under the IBC. Our expertise also lies in  handling cases on behalf of Liquidators and Receivers.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div style={overlayStyles}></div>
            <img src={Practice} alt="Third slide" style={imageStyle} />
            <Carousel.Caption style={{ height: '20%', bottom: 'unset', top: '20%', transform: 'translateY(-50%)' }}>
              <h1>Practice Area</h1>
              <br></br>
              <br></br>
              <h3>General Corporate Advisory</h3>
              <p>We at Neeti Legal are experienced in a wide range of matters, from General Corporate Advisory, Corporate Governance, Exchange Control Regulations to Mergers and Acquisitions, Joint Ventures and strategic partnerships, takeovers, outbound investments etc. Our work in this area is perfectly suited to the diverse and evolving business environment in India. Keeping the Firm ahead of its peers is its unique combination of experience and commitment, which enables clients to mitigate risk and achieve business and growth objectives.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  
      </section>
      <section style={{backgroundColor: '#16214f'}}>
        <div style={{ position: 'relative' }}>
          <img src={gold} alt="Gold" style={goldImageStyle} />
            <div style={overStyles}></div>
          <div style={textOverlayStyle}>Discover Next-Gen Legal Solutions with Neeti Legal</div>
          </div>
      </section>
      <div style={footerSectionStyles}>
        <button
          style={{ ...disclaimerButtonStyles, marginRight: '1000px',marginTop: '30px' }}
          onMouseEnter={() => setHoveredDisclaimer(true)}
          onMouseLeave={() => setHoveredDisclaimer(false)}
          onClick={() => setShowDisclaimer(true)}
        >
          Disclaimer
        </button>
        
        <a href="/home" style={{marginRight: '0px'}}>
          <img src={logo} alt="Neeti Legal Logo" style={logoStyles} />
          </a>
        {/* Social Media Buttons */}
        <div style={socialButtonsStyles}>
          <div style={{ display: 'flex', marginLeft: '0px' }}>
            <a
              href="https://www.instagram.com/neetilegal?igsh=MmVlMjlkMTBhMg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialButtonStyle, ...(hoveredIcon === 'instagram' ? socialButtonHoverStyle : {}) }}
              onMouseEnter={() => setHoveredIcon('instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
            href={() =>setShowContactModal(true)}
            style={{ ...phoneButtonStyle, ...(hoveredIcon === 'phone' ? socialButtonHoverStyle : {}) }}
            onMouseEnter={() => setHoveredIcon('phone')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={handlePhoneClick} 
          >
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
            <a
              href="https://www.linkedin.com/company/neeti-legal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...socialButtonStyle, ...(hoveredIcon === 'linkedin' ? socialButtonHoverStyle : {}) }}
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:admin@neetilegal.in"
              style={{ ...socialButtonStyle, ...(hoveredIcon === 'mail' ? socialButtonHoverStyle : {}) }}
              onMouseEnter={() => setHoveredIcon('mail')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        
        {/* Logo and Copyright */}
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
       
      <br></br>
    <ul style={{listStyle:'none',marginLeft: '0px',marginRight: '30px',fontFamily: 'Nanum Myeongjo, serif',}}>
    <p style={{fontFamily: 'Nanum Myeongjo, serif',fontSize: '20px', fontWeight: 'bold'}}>QUICK LINKS</p>
    <a href="/contact-us#get-in-touch-section" style={{ color: '#fff', textDecoration: 'none', padding: '0px',display: 'inline-block', }}>
      <li style={{ borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}>
        <span
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => e.target.parentNode.style.borderBottom = '2px solid #fff'}
          onMouseLeave={(e) => e.target.parentNode.style.borderBottom = '2px solid transparent'}
        >
          Careers
        </span>
      </li>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/news-and-insights" style={{ color: '#fff', textDecoration: 'none', padding: '0px' ,display: 'inline-block',}}>
      <li style={{ borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}>
        <span
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => e.target.parentNode.style.borderBottom = '2px solid #fff'}
          onMouseLeave={(e) => e.target.parentNode.style.borderBottom = '2px solid transparent'}
        >
          News and Insights
        </span>
      </li>
     
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', padding: '0px' ,display: 'inline-block', }}>
    <li style={{ borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}>
        <span
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => e.target.parentNode.style.borderBottom = '2px solid #fff'}
          onMouseLeave={(e) => e.target.parentNode.style.borderBottom = '2px solid transparent'}
        >
          Privacy Policy
        </span>
      </li>
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/terms-of-use" style={{ color: '#fff', textDecoration: 'none', padding: '0px',display: 'inline-block', }}>
    <li style={{ borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}>
        <span
          style={{ cursor: 'pointer' }}
          onMouseEnter={(e) => e.target.parentNode.style.borderBottom = '2px solid #fff'}
          onMouseLeave={(e) => e.target.parentNode.style.borderBottom = '2px solid transparent'}
        >
          Terms of Use
        </span>
      </li>
    </a>
    </ul>
        
        </div>
        <br></br>
        <button
        id="scroll-to-top-button"
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#001f3f',
          color: '#fff',
          borderRadius: '48%',
          border: '2px solid white',
          padding: '10px',
          cursor: 'pointer',
          display: 'none', // Initially hide the button
        }}
      >
        {/* FontAwesome arrow icon */}
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
        <br></br>
      </button>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '10px', width: '100%' }}>
    <p>&copy; 2023 Neeti Legal. All rights reserved.</p>
  </div>
      </div>
      {showDisclaimer && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '12px',
              borderRadius: '8px',
              maxWidth: '1000px',
              textAlign: 'justify',
              fontSize: '18px',
            }}
          >
          <h2>Disclaimer</h2>
           <p>
              This website has been designed only for the purposes of dissemination of basic information on Neeti Legal;
              information which is otherwise available on the internet, various public platforms and social media. Careful
              attention has been given to ensure that the information provided herein is accurate and up-to-date. However,
              Neeti Legal is not responsible for any reliance that a reader places on such information and shall not be liable
              for any loss or damage caused due to any inaccuracy in or exclusion of any information, or its interpretation thereof.
              Reader is advised to confirm the veracity of the same from independent and expert sources.
            </p>
            <p>This website is not an attempt to advertise or solicit clients, and does not seek to create or invite any lawyer-client relationship. The links provided on this website are to facilitate access to basic information on Neeti Legal, and, to share the various thought leadership initiatives undertaken by it. The content herein or on such links should not be construed as a legal reference or legal advice. Readers are advised not to act on any information contained herein or on the links and should refer to legal counsels and experts in their respective jurisdictions for further information and to determine its impact.
Neeti Legal uses cookies on its website to improve its usability. This helps us in providing a good user experience and to also help in improving our website. By continuing to use our website without changing your privacy settings, you agree to use our cookies.</p>
            {/* ... (rest of the disclaimer text) */}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowDisclaimer(false)} style={{ marginRight: '10px', padding: '15px 25px', borderRadius: '8px', background: '#001f3f', color: '#fff', cursor: 'pointer',fontSize:'20px' }}>
                Accept
              </button>
              <button onClick={handleDisclaimerClick} style={{ padding: '15px 25px', borderRadius: '8px', background: '#d9d9d9', cursor: 'pointer',fontSize:'20px' }}>
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
      {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
    </>
  );
};

export default PracticeArea;
