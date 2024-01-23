import React, { useState,useEffect } from 'react';
import homeImage from '../image/home1.png';
import homeeImage from '../image/home2.png';
import homeeeImage from '../image/home3.png';
import logo from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// import App from '../App';

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

function Home() {
  const [hoveredDisclaimer, setHoveredDisclaimer] = useState(false);
  const [hoveredReadMore, setHoveredReadMore] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);



  useEffect(() => {
    console.log("Inside useEffect");
    const disclaimerShown = localStorage.getItem('disclaimerShown');

    if (!disclaimerShown) {
      setShowDisclaimer(true);
      localStorage.setItem('disclaimerShown', 'true');
    }
  }, []);


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

  const handlePhoneClick = () => {
    setShowContactModal(true);
  };

  

  const phoneButtonStyle = {
    margin: '10px',
    cursor: 'pointer',
    color: 'white',
  };
  // const heroSectionStyles = {
  //   position: 'relative',
  // };

  const imageContainerStyles = {
    position: 'relative',
    maxWidth: '100%',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
   
  };

  // const overlayStyles = {
  //   // position: 'absolute',
  //   // top: 0,
  //   // left: 0,
  //   // width: '100%',
  //   // height: '100%',
  //   // display: 'flex',
  //   // flexDirection: 'column',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   // background: 'rgba(0, 0, 0, 0.5)',
  //   position: 'absolute',
  // top: '50%',  // Center the text vertically
  // left: '50%', // Center the text horizontally
  // transform: 'translate(-50%, -50%)',
  // width: '100%', // Adjust the width as needed
  // textAlign: 'center',
  // color: '#d5984e',
  // // fontSize: '10px'
  // '@media screen and (max-width: 767px)': {
  //   fontSize: '10px', // Set font size to 10px on mobile devices
  // },
  // };

  const textStyles = {
    color: '#d5984e',
    fontSize: '4.5em',
    textAlign: 'center',
    fontFamily: 'Nanum Myeongjo, serif',
  };

  const paragraphStyles = {
    color: '#fff',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '2em',
    fontFamily: 'Nanum Myeongjo, serif',
    
  };

  const cardSectionStyles = {
    padding: '50px 0',
    backgroundColor: '#d5984e',
  };

  const cardContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
   
  };

  const cardStyles = {
    width: '46%',
    minHeight: '320px',
    marginLeft: '15px',
    marginRight: '15px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#16214f',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: 'Nanum Myeongjo, serif',
   
  };

  const mediaQueryStyles = `
  @media screen and (max-width: 767px) {
    section {
      padding: 20px; 
    }
    h1 {
      font-size: 1em; 
    }
    p {
      font-size: 1em; 
    }
  }
`;


const HeroSection = styled.section`
  position: relative;

  @media screen and (max-width: 767px) {
    padding: 20px;
    h1 {
      fontSize: 10px; 
    }
    p {
      fontSize: 1em; 
    }
  }
`;
  const imageStylesCommon = {
    width: '46%',
    borderRadius: '8px',
  };

  const readMoreButtonStyles = {
    backgroundColor: hoveredReadMore ? '#d9d9d9' : '#d9d9d9',
    color: '#001f3f',
    padding: '10px 20px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    fontFamily: 'Nanum Myeongjo, serif',
    borderRadius: '8px',
    border: '2px solid white',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Added transform transition
  transform: hoveredReadMore ? 'scale(1.1)' : 'scale(1)',
  '@media (max-width: 768px)': {
    fontSize: '1em', // Adjust font size for smaller screens
  },
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

  const logoStyles = {
    width: '135px', // Adjust the width as needed
    height: 'auto',
    borderRadius: '8px',
    marginBottom: 'auto',
    marginLeft: '0%',
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

  const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  color: #d5984e;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const handleDisclaimerClick = () => {
  window.location.href = 'https://www.google.com';
};
const disclaimerButtonStyles = {
  backgroundColor: hoveredDisclaimer ? '#d9d9d9' : '#d9d9d9',
  color: '#001f3f',
  padding: '10px 20px',
  fontSize: '1.2em',
  borderRadius: '8px',
  border: '2px solid white',
  cursor: 'pointer',
  marginTop: '5px',
  fontFamily: 'Nanum Myeongjo, serif',
  transition: 'background-color 0.3s ease, transform 0.3s ease', 
  transform: hoveredDisclaimer ? 'scale(1.1)' : 'scale(1)',
};
const socialButtonHoverStyle = {
  transform: 'scale(1.2)', // You can adjust the scale factor as needed
};

  const renderCard = (title, description, styles,path) => (
    <div key={title} style={styles}>
      <h3 style={{ fontSize: '2em' }}>{title}</h3>
      {title === 'Our Principles' ? (
        <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
          <li style={{ fontSize: '1em', marginBottom: '10px' }}>
            Our Core Values are the 4Cs, and they lay the foundation for all our thoughts and actions.
          </li>
          <li style={{ fontSize: '1em', marginBottom: '10px' }}>
            Character – Uphold the highest standards of fairness.
          </li>
          <li style={{ fontSize: '1em', marginBottom: '10px' }}>
            Competence – Strive for extraordinary performance by combining technical expertise with emotional intelligence.
          </li>
          <li style={{ fontSize: '1em', marginBottom: '10px' }}>
            Commitment – Demonstrate unwavering dependability and take full ownership of our broader mission.
          </li>
          <li style={{ fontSize: '1em' }}>
            Creativity – Demonstrate unwavering dependability and take full ownership of our broader mission.
          </li>
        </ul>
      ) : (
        <p style={{ fontSize: '1em' }}>{description}</p>
      )}
      <a href={path} style={{ textDecoration: 'none' }}>
      <button style={readMoreButtonStyles}
       onMouseEnter={() => setHoveredReadMore(true)}
          onMouseLeave={() => setHoveredReadMore(false)} 
        >Read More</button>
          </a>
    </div>
  );

  return (
    <div>
      <div>
      <style>{mediaQueryStyles}</style>
      <HeroSection>
      {/* <section style={heroSectionStyles}> */}
        <div style={imageContainerStyles}>
          <img src={homeImage} alt="Home Image" style={imageStyles} />
          {/* <div className='one' style={overlayStyles}> */}
          <Overlay>
            <h1 style={textStyles}>Next-Gen Legal Solutions with Cutting Edge Technology</h1>
            <p style={paragraphStyles}>
              Welcome to a Future-Ready Legal Experience! <br></br>Discover Next-Gen Legal
              Solutions at the Intersection of Innovation and Cutting-Edge
              Technology, Revolutionizing How We Practice Law
            </p>
          {/* </div> */}
          </Overlay>
        </div>

        </HeroSection>
      {/* </section> */}
      </div>
      <section style={cardSectionStyles}>
        <div style={cardContainerStyles}>
          {/* Left Image Card */}
          <div style={{ ...cardStyles, ...imageStylesCommon }}>
            <img src={homeeImage} alt="Left Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>

          {/* Other Cards */}
          {renderCard("About Neeti Legal" , "We are a full-service law firm with offices in Delhi NCR, Kolkata and Jaipur renowned for our consistently exceptional service quality and unwavering commitment to client satisfaction.", cardStyles,'/about')}
          {renderCard("Our Expertise", "In today’s dynamic legal landscape, a law firm’s expertise across a range of practice areas is essential. At Neeti Legal, we take immense pride in our proficiency in various legal domains, each carefully designed to cater to the specific needs of our clients. Our extensive experience and commitment to excellence have allowed us to excel in practice areas such as Intellectual Property Rights (IPR), Mediation/Arbitration/Negotiation, Class Action, Investor-Founder Disputes, Recovery Suits, Insurance Claims, Start-up Advisory, and Cyber-crime matters.", cardStyles,'/about')}
          {renderCard("Our Purpose", "At Neeti Legal, our purpose is to transform the legal landscape by delivering forward-thinking, technology-driven solutions that redefine the way we approach law. We are committed to bridging the gap between innovation and the legal world, enabling legal professionals and clients to navigate their legal challenges with ease and efficiency. Our mission is to revolutionize legal practice through cutting-edge technology, making legal solutions accessible, efficient, and future-ready for all.Discover Next-Gen Legal Solutions with Neeti Legal.", cardStyles,'/about')}
          {renderCard("Our Principles", "", cardStyles,'/about')}

          {/* Right Image Card */}
          <div style={{ ...cardStyles, ...imageStylesCommon }}>
            <img src={homeeeImage} alt="Right Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>
      </section>
      <div style={footerSectionStyles}>
        <button
          style={{ ...disclaimerButtonStyles, marginRight: '1000px' ,marginTop: '30px' }}
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
          <div style={{ display: 'flex' }}>
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
          // onClick={handleNewsAndInsightsClick} 
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
          // onClick={handlePrivacyPolicyClick}
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
          // onClick={handleTermsOfUseClick}
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

      {/* Disclaimer Modal */}
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
            '@media (max-width: 768px)': {
              width: '50%',
            }
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
              '@media (max-width: 768px)': {
                fontSize: '1em',
                width: '50%',
              },
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
    </div>
  );
}
export default Home;