import React, { useRef, useState, useEffect  } from 'react';
import contact from '../image/contact2.jpg';
import emailjs from '@emailjs/browser';
import logo from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const SuccessMessage = ({ message, onClose }) => (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 9999,
    }}
  >
    <p style={{ margin: 0 }}>{message}</p>
    <button onClick={onClose}>Close</button>
  </div>
);


const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [hoveredDisclaimer, setHoveredDisclaimer] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Check if there is a hash in the URL
    const hash = window.location.hash;

    if (hash) {
      // Find the element with the corresponding id
      const targetElement = document.getElementById(hash.substring(1));

      if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
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
    transform: 'scale(1.2)', // You can adjust the scale factor as needed
  };

  const socialButtonsStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    flexDirection: 'row',
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

  const sectionStyle = {
    backgroundColor: '#16214f',
    color: '#fff',
    padding: '50px 0',
    textAlign: 'center',
    fontFamily: 'Nanum Myeongjo, serif',
    '@media (max-width: 768px)': {
      padding: '30px 0',
    },
    '@media (max-width: 480px)': {
      padding: '20px 0',
    },
  };

  const officeContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  };

  const officeStyle = {
    width: '30%',
    marginBottom: '30px',
  };

  const headerStyle = {
    color: '#d5984e',
    fontWeight: 'bold',
  };
  const backImageStyle = {
    width: '1220px',
    height: '300px',
    objectFit: 'cover',
    position: 'relative',
  };

  const overStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const contactTextStyles = {
    position: 'absolute',
    top: '50%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '4em',
    fontWeight: 'bold',
    fontFamily: 'Nanum Myeongjo, serif',
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      // Alert the user or handle the case where not all fields are filled
      alert('Please fill in all fields.');
      return;
    }

    try {
      const result = await emailjs.sendForm('service_o5hid7m', 'template_bwkl0r2', form.current, 'SG3_HpuVO3DXxMv7E');
      console.log(result.text);
      setSuccessMessage('Message sent successfully!');
      form.current.reset();
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
    } catch (error) {
      console.log(error.text);
      alert('Error sending message. Please try again later.');
    }
    // emailjs.sendForm('service_o5hid7m', 'template_bwkl0r2', form.current, 'SG3_HpuVO3DXxMv7E')
    //   .then((result) => {
    //     console.log(result.text);
    //     console.log("message sent");
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };

  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 20000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div>
      <section style={{ backgroundColor: '#d5984e', '@media (max-width: 768px)': {
    padding: '30px 0',
  },
  '@media (max-width: 480px)': {
    padding: '20px 0',
  },}}>
        <div style={{ position: 'relative' }}>
          <img src={contact} alt="contactus" style={backImageStyle}></img>
          <div style={overStyles}></div>
          <div style={contactTextStyles}>CONTACT US</div>
        </div>
      </section>
      <section style={sectionStyle}>
        <div>
          <h1>Our Offices</h1>
          <br></br>
          <br></br>
          <div style={officeContainerStyle}>
            <div style={officeStyle}>
              <h2 style={headerStyle}>Jaipur Office</h2>
              <br></br>
              <p>2nd Floor, 55, Tonk Rd, Opposite Motisons Jewellers, Lalkothi, Jaipur - 302015</p>
            </div>
            <div style={officeStyle}>
              <h2 style={headerStyle}>Gurugram Office</h2>
              <br></br>
              <p>6th floor, Platina Tower, Near Sikanderpur Metro Station, Gurugram - 122010</p>
            </div>
            <div style={officeStyle}>
              <h2 style={headerStyle}>New Delhi Office</h2>
              <br></br>
              <p>12A, Pocket – D, Mayur Vihar, Phase – 2, New Delhi – 110 091</p>
            </div>
          </div>
          <br></br>
          <br></br>
          <div style={officeContainerStyle}>
            <div>
              <h2 style={headerStyle}>Contact No.</h2>
              <br></br>
              <p><a href="http://wame.pro/1hav1o" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#fff' }}>+91 9694059074</a></p>
              <p><a href="http://wame.pro/1hvl55" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#fff' }}>+91 9549378454</a></p>
            </div>
            <div>
              <h2 style={headerStyle}>Email Us</h2>
              <br></br>
              <p><a href="mailto:admin@neetilegal.in" style={{ textDecoration: 'underline', color: '#fff' }}>admin@neetilegal.in</a></p>
            </div>
          </div>
        </div>
      </section>
      {/* get in touch section */}
      <section id="get-in-touch-section" style={{ backgroundColor: '#d5984e', fontFamily: 'Nanum Myeongjo, serif', }}>
        <h1 style={{ color: '#fff', textAlign: 'center' , fontFamily: 'Nanum Myeongjo, serif',}}>Get In Touch</h1><br></br>
        <h6 style={{color:'#16214f',textAlign: 'center',fontFamily: 'Nanum Myeongjo, serif',}}><b>In case of career applications and other inquries, please write us at <a href="mailto:admin@neetilegal.in" >admin@neetilegal.in</a></b></h6><br></br>
        
        {successMessage && (
          <SuccessMessage
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', marginBottom: '10px' }}>
            <div style={{ flex: 1, marginRight: '10px' }}>
              <label htmlFor="user_name" style={{ color: '#fff' }}>
                Name:
              </label><br></br>
              <input type="text" name="user_name" placeholder='Enter your name' style={{ borderRadius: '5px', border: 'white', width: '100%', padding: '8px' }} />
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
              <label htmlFor="user_email" style={{ color: '#fff' }}>
                Email:
              </label><br></br>
              <input type="email" name="user_email" placeholder='Enter your email' style={{ borderRadius: '5px', border: 'white', width: '100%', padding: '8px' }} />
            </div>
          </div>
          <div style={{ marginBottom: '10px', width: '50%' }}>
            <label name="message" style=
            {{ 
              // marginRight: '10px', 
            color: '#fff' ,
            }}>
              Message:
            </label>
            <textarea name="message" placeholder='Enter your message' style={{ borderRadius: '5px', border: 'white', width: '100%', height: '90px', padding: '8px' }} />
          </div>
          <div>
            <input type="submit" value="Submit" style={{
              backgroundColor: '#d9d9d9', color: '#001f3f',
              padding: '10px 20px',
              fontSize: '1.2em',
              borderRadius: '8px',
              border: '2px solid #fff',
              cursor: 'pointer',
              marginTop: '5px',
              transition: 'transform 0.2s',
              fontFamily: 'Nanum Myeongjo, serif',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </form>
      </section>
      <div style={footerSectionStyles}>
        <button
          style={{ ...disclaimerButtonStyles, marginRight: '1000px',marginTop: '30px'  }}
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
       
       <br></br>
     <ul style={{listStyle:'none',marginLeft: '0px',marginRight: '30px',fontFamily: 'Nanum Myeongjo, serif',}}>
     <p style={{fontFamily: 'Nanum Myeongjo, serif',fontSize: '20px', fontWeight: 'bold'}}>QUICK LINKS</p>
     <a href="/contact-us#get-in-touch-section" onClick={() => document.getElementById('get-in-touch-section').scrollIntoView({ behavior: 'smooth' })} style={{ color: '#fff', textDecoration: 'none', padding: '0px',display: 'inline-block', }}>
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
    </div>
  );
};

export default ContactUs;
