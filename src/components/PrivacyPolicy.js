import React, { useState,useEffect } from 'react';
import logo from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [hoveredDisclaimer, setHoveredDisclaimer] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
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

  const underlineStyles = {
    borderBottom: '3px solid #d5984e', // Golden color
    display: 'inline-block', // Make sure the underline only spans the text width
    paddingBottom: '7px', // Adjust as needed
  };
  
  return (
    <div>
    <div style={{fontFamily: 'Playfair Display, serif'}} >
    <div style={{ marginTop: '30px', }}>
    <h1 style={{color: '#16214f',fontFamily: 'Nanum Myeongjo, serif', textAlign: 'center',}}>PRI<span style={underlineStyles}>VACY POL</span>ICY</h1>
    <br></br>
    <div style={{ marginRight: '70px', marginLeft: '70px'}}>
      <p style={{fontSize: '18px',}}>Welcome to <strong>Neeti Legal!</strong> This Privacy Policy governs the collection, use, disclosure, and retention of personal data and sensitive personal data <strong>(collectively referred to as "Information")</strong> by Neeti Legal <strong>(referred to as "we," "us," or "our").</strong> This Privacy Policy applies to anyone who accesses our website, <strong>"www.neetilegal.in" (the "Website"),</strong> or shares any Information with us, including Neeti Legal clients, employees, and staff. We prioritize your privacy and are committed to safeguarding your Information while ensuring its security. You can trust that we handle your data with the utmost care and respect.</p><br></br>
      <ol style={{fontSize: '18px'}}>
        <h4><li style={{color: '#16214f'}}><strong>Information We Collect</strong></li></h4>
        <p style={{fontSize: '18px'}}>We collect your Information when you access our website or communicate with us through email or other digital channels. This Information may include personal data as defined by applicable data protection laws. The Information we collect encompasses, but is not limited to, the following:</p>
        <ul style={{listStyleType: 'disc'}}>
          <li><i>Personal details</i>: Your name, qualifications, identification numbers, contact information (email address, phone numbers, physical address), language(s) spoken, gender, date of birth, Voter ID, passport number, PAN Card, marital status, dependents, emergency contact information, photograph, biometric data, medical records, and health information.</li>
          <br></br>
          <li><i>Financial information</i>: Details such as bank and Demat accounts, salaries, retainership fees, and stipends.</li>
          <br></br>
          <li><i>Career-related data</i>: Information about your job role, contractual details, system and application access, and device-related information.</li>
          <br></br>
          <li><i>Performance-related data</i>: Letters of application, resume/CV, or other provided documents, performance reviews, and development information.</li>
          <br></br>
          <li><i>Data collected during Website or mobile application use</i>: Automatically collected data such as device ID, IP address, web browser type, page views, operating system, timing and frequency of Website or application use, and application/website navigation.</li>
          <br></br>
          <li>Any other Information collected as part of our contractual relations with service providers or clients when providing services or during onboarding.</li>
        </ul>
        <br></br>
        <p>We collect Aadhaar information only when it is mandatory for compliance with applicable laws. You may provide other identification documents such as a PAN card, passport, or driver’s license when Aadhaar information is not mandatory. We will inform you when such collection is mandatory.</p>
       <h4>
        <li style={{color: '#16214f'}}><strong>Uses of Information</strong></li>
       </h4>
       <ul style={{listStyleType: 'disc'}}>
       <p>We may use your Information for the following purposes:</p>
        <li>Managing interactions with you, including employment or engagement, access to our premises and assets.</li>
        <li>Facilitating communication, including during emergencies.</li>
        <li>Operating and managing our business.</li>
        <li>Providing services to our clients.</li>
        <li>Displaying or communicating highlights of our work on the Website or to third parties.</li>
        <li>Offering insights into key developments, legal issues, and knowledge management.</li>
        <li>Complying with global legal requirements and defending Neeti Legal’s legal rights.</li>
        <li>Monitoring your use of our systems.</li>
        <li>Conducting data analytics to improve service quality and streamline internal processes.</li>
       </ul>
       <p>If we are required to process your personal data or Aadhaar information for a purpose not mentioned above, we will seek your consent.</p>
       <h4>
        <li style={{color: '#16214f'}}><strong>Your Rights</strong></li>
       </h4>
       <ul style={{listStyleType: 'disc'}}>
        <li><i>Right of Access, Modification, and Deletion</i>: You can access your Information at any time, review the data you have supplied, and modify any inaccurate Information. You may also request the deletion of any Information you have provided to us by contacting our Data Protection Officer. Please note that deletion may affect our ability to process or communicate with you and may lead to the discontinuation of our relationship for which the data was being used, subject to applicable data retention laws.</li><br></br>
        <li><i>Security and Confidentiality</i>: We employ reasonable security practices and standards in line with applicable laws to protect your Information. These security measures align with industry best practices for confidentiality and data security.</li><br></br>
       </ul>
       <h4>
        <li style={{color: '#16214f'}}><strong>Disclosures and Transfers</strong></li>
       </h4>
       <p>We disclose or transfer Information under the following circumstances:</p>
       <ul style={{listStyleType: 'disc'}}>
        <li><i>Disclosures within Neeti Legal</i>: Access to your Information within Neeti Legal is limited to personnel who require it for the purposes described in this Privacy Policy. We may use third-party vendors for storing your Information, ensuring that your data is protected with the same standards as Neeti Legal’s internal data protection practices.</li><br></br>
        <li><i>Disclosures or Transfers to Third Parties</i>: We disclose Information to third parties with your explicit consent or when such disclosure is essential for the performance of a contractual agreement between Neeti Legal and you. We will explicitly request your consent for the transfer of your Information, including Aadhaar information, for any purpose described in this Privacy Policy. Our practice is to provide third parties with only the Information necessary to achieve the intended processing purposes. We are committed to refraining from sharing personal data unless required by law or in alignment with the intended data processing purposes. We take utmost care in protecting your Information and maintaining the highest level of data privacy standards.</li><br></br>
        <li><i>Mandatory Disclosures or Transfers</i>: We may disclose Information if required by law, court order, judicial or government warrant, or to cooperate with law enforcement or other governmental agencies.</li><br></br>
       </ul>
       <h4>
        <li style={{color: '#16214f'}}><strong>Data Retention</strong></li>
       </h4>
       <p>All personal data, including Aadhaar information, will be retained only as long as necessary for Neeti Legal or as required by applicable laws.</p>
       <h4>
        <li style={{color: '#16214f'}}><strong>Amendments to this Privacy Policy</strong></li>
       </h4>
       <p>We may revise this Privacy Policy from time to time. We encourage you to check this page periodically for modifications or corrections to understand how they affect the use of your Information. We will not be responsible for your failure to stay informed about such changes.</p>
       <h4>
        <li style={{color: '#16214f'}}><strong>Data Protection Officer</strong></li>
       </h4>
       <p>If you have any concerns or questions regarding our Privacy Policy, please <a href= '/contact-us'>contact us!</a></p>
       <br></br>
      </ol>
      </div>
    </div>
    </div>
    

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
};

export default PrivacyPolicy;
