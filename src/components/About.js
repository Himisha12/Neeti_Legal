import React, { useState, useEffect } from 'react';
import aboutImage from '../image/about.jpg'; 
import circleImage from '../image/about2.png'; 
import yourBackgroundImage from '../image/about3.jpg';
import circleTwoImage from '../image/about4.png';
import logo  from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const SquareBox = ({ title, text, isHovered, onMouseEnter, onMouseLeave }) => {
  const boxStyles = {
    position: 'relative',
    width: '310px',
    height: '400px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    margin: '20px',
    marginTop:'35px',
    marginBottom:'35px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
  };
  const backgroundImageStyles = {
    position: 'absolute',
    borderRadius:'8px',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: isHovered ? 0 : 1,
    transition: 'opacity 0.3s',
  };
  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    opacity: isHovered ? 0 : 1, 
  };
  const titleStyles = {
    position: 'relative', // Added to ensure the title is positioned correctly
    zIndex: 1, // Ensure that the title is displayed above the image
    fontSize: '1.8em', // Adjust the font size for the title
    fontWeight: 'bold',
    marginBottom: '10px',
    color:'#fff',
    fontFamily: 'Nanum Myeongjo, serif',
  };

  const textStyles = {
    fontSize: '0.75em', // Adjust the font size for the text
    textAlign: 'center',
    padding: '0 15px',
  };

  return (
    <div
      style={isHovered ? { ...boxStyles, backgroundColor: '#d5984e', color: '#fff' } : boxStyles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    <img src={yourBackgroundImage} alt="Background" style={backgroundImageStyles} />
    <div style={overlayStyles}></div>
      {isHovered ? (
        <div>
          <div style={textStyles}>{text}</div>
        </div>
      ) : (
        <div style={titleStyles}>{title}</div>
      )}
    </div>
  );
};

const About = () => {
  const [isBoxVisible, setBoxVisible] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);
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
    transform: 'scale(1.2)', // You can adjust the scale factor as needed
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
  const aboutSectionStyles = {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: '#d5984e', // Golden background color
  };

  const aboutImageStyles = {
    width: '100%',
    height: '300px', // Adjust the height as needed
    objectFit: 'cover',
    position: 'relative',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  };

  const aboutTextStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '3.7em',
    fontWeight: 'bold',
    fontFamily: 'Nanum Myeongjo, serif',
  };

  const expertiseBoxStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px',
    border: '2px solid #16214f',
    borderRadius: '8px',
    backgroundColor: '#16214f',
    color: '#FFF',
    fontSize: '1.5em',
    marginTop: '30px',
    opacity: isBoxVisible ? 1 : 0,
    transform: isBoxVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'opacity 1.0s, transform 1.0s',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Nanum Myeongjo, serif',
  };

  const circleContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#16214f', // Dark background color
    padding: '20px', // Adjust padding as needed
  };

  const circleStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.5s',
    width: '300px', // Adjust the size of the circle
  height: '300px', // Adjust the size of the circle
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  border: '0cm solid #fff',
  zIndex: 0,
  };

  const circleImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: 'rotateY(0deg)',
    transition: 'transform 0.5s',
  };

  const circleSectionStyles = {
    backgroundColor:'#16214f'
  };



  const circleTextStyles = {
    marginLeft: '20px', // Adjust margin as needed
    color: '#fff',
    fontSize: '1.5em',
    fontWeight: 'bold',
    fontFamily: 'Nanum Myeongjo, serif',
    zIndex: 1, // Ensure that the text is displayed above the circle
  };
  const textStyles = {
    fontFamily: 'Nanum Myeongjo, serif',
    fontWeight: 'bold',
  };

 // ... (existing code)

const CircleSection = () => {
  return (
    <section style={circleSectionStyles}>
      <div style={circleContainerStyles}>
        <div
          id="circle1"  // Change the ID to make it unique
          style={circleStyles}
          onMouseEnter={() => flipOnHover('circle1')}
          onMouseLeave={() => flipOnLeave('circle1')}
        >
          <img src={circleImage} alt="Flipping Circle" style={circleImageStyles} />
        </div>
        <div style={circleTextStyles}>
          <h1 style={textStyles}>Rajat Kumar</h1><br></br>
          <p>Advocate, Supreme Court of India, New Delhi</p><br></br>
          <p>Master of Business Laws, National Law School of India University, Bangalore</p><br></br>
          <p>B.A., LL.B. (Hons.), University of Rajasthan, Jaipur</p>
        </div>
      </div>
    </section>
  );
};

const AnotherCircleSection = () => {
  return (
    <section style={circleSectionStyles}>
      <div style={circleContainerStyles}>
        <div
          id="circle2"  // Change the ID to make it unique
          style={circleStyles}
          onMouseEnter={() => flipOnHover('circle2')}
          onMouseLeave={() => flipOnLeave('circle2')}
        >
          <img src={circleTwoImage} alt="Flipping Circle" style={circleImageStyles} />
        </div>
        <div style={circleTextStyles}>
          <h1 style={textStyles}>Devesh Kumar</h1><br></br>
          <p>Advocate, Supreme Court of India, New Delhi</p><br></br>
          <p>B.B.A., LL.B. (Business Law Hons.), National Law University, Jodhpur</p><br></br>
        </div>
      </div>
    </section>
  );
};

const flipOnHover = (circleId) => {
  const circle = document.getElementById(circleId);
  if (circle) {
    circle.style.transform = 'rotateY(180deg)';
  }
};

const flipOnLeave = (circleId) => {
  const circle = document.getElementById(circleId);
  if (circle) {
    circle.style.transform = 'rotateY(0deg)';
  }
};

// ... (existing code)

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const aboutBox = document.getElementById('aboutBox');

    if (aboutBox) {
      const boxPosition = aboutBox.offsetTop;

      if (scrollPosition > boxPosition && !isBoxVisible) {
        setBoxVisible(true);
      }
    }
  };

  const boxContent = [
    {
      title: 'Intellectual Property Rights (IPR)',
      text: 'In the era of innovation and creativity, safeguarding intellectual property has become a critical aspect of business strategy. Our IPR team comprises skilled attorneys who understand the intricacies of patents, trademarks, copyrights, and trade secrets. Whether you are a tech startup protecting your innovations or a creative artist preserving your work, our experts provide comprehensive legal solutions that uphold your intellectual property rights.',
    },
    {
      title: 'Mediation/ Arbitration/ Negotiation',
      text: 'Legal disputes can be lengthy and expensive, but our mediation, arbitration, and negotiation experts are adept at finding cost-effective and efficient solutions. We are skilled in facilitating amicable resolutions, reducing litigation time and costs, and ensuring that our clients’ interests are protected during negotiations or dispute resolution processes.',
    },
    {
      title:"Class Action",
      text: "Class actions are powerful tools for seeking justice on behalf of a group of individuals facing similar legal issues. Our class action attorneys possess an in-depth understanding of the complexities involved in representing and guiding plaintiffs and defendants in class action suits, ensuring that justice is served efficiently and equitably.",
    },
    {
      title: "Investor-Founder Disputes",
      text:"In the ever-evolving startup ecosystem, disputes between investors and founders can arise. Our legal team specializes in mediating and resolving these complex conflicts, safeguarding the interests of both parties and fostering an environment where business growth can continue unimpeded.",
    },
    {
      title:"Recovery Suits",
      text:"Recovery suits play a significant role in securing unpaid debts or recovering assets. Neeti Legal excels in handling these cases, leveraging our knowledge of debt recovery laws and regulations to help clients regain what is rightfully theirs.",
    },
    {
      title:"Insurance Claims",
      text:"In a world full of uncertainties, insurance claims are a crucial means of protection. Our insurance experts assist clients in navigating the intricacies of insurance policies, helping them secure rightful compensation after unforeseen events or accidents.",
    },
    {
      title:"Start-up Advisory",
      text:"Startups often require guidance in legal matters as they scale and face various challenges. Our startup advisory team offers comprehensive legal support, from business formation and regulatory compliance to intellectual property protection and contract negotiation, ensuring that startups have a solid legal foundation to thrive.",
    },
    {
      title:"Cyber Crimes",
      text:"In an increasingly digital world, cybercrimes have become more prevalent. Our cyber practice area specializes in assisting clients who are victims of cyber crimes or need guidance on cybersecurity measures. We help clients navigate the legal complexities of cyber incidents, ensuring that their rights are protected in the digital realm.",
    },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBoxVisible]);

  return (
    <div>
      <section  style={aboutSectionStyles}>
        <div style={{ position: 'relative' }}>
          <img src={aboutImage} alt="About Neeti Legal" style={aboutImageStyles} />
          <div style={overlayStyles}></div>
          <div style={aboutTextStyles}>ABOUT NEETI LEGAL</div>
        </div>
         <div id="aboutBox" style={expertiseBoxStyles}>
          <h1>OUR EXPERTISE</h1>
          <p style={{fontSize: '.7em'}}>
            In today’s dynamic legal landscape, a law firm’s expertise across a range of practice areas is essential. At Neeti Legal, we take immense pride in our proficiency in various legal domains, each carefully designed to cater to the specific needs of our clients. Our extensive experience and commitment to excellence have allowed us to excel in practice areas such as Intellectual Property Rights (IPR), Mediation/Arbitration/Negotiation, Class Action, Investor-Founder Disputes, Recovery Suits, Insurance Claims, Start-up Advisory, and Cyber-crime matters.
          
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', justifyContent: 'center', color: 'black' }}>
            {[0, 1, 2].map((index) => (
              <div key={index}>
                <SquareBox
                  title={boxContent[index].title}
                  text={boxContent[index].text}
                  isHovered={hoveredBox === index}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', justifyContent: 'center', color: 'black' }}>
            {[3, 4, 5].map((index) => (
              <div key={index}>
                <SquareBox
                  title={boxContent[index].title}
                  text={boxContent[index].text}
                  isHovered={hoveredBox === index}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
            {[6, 7].map((index) => (
              <div key={index}>
                <SquareBox
                  title={boxContent[index].title}
                  text={boxContent[index].text}
                  isHovered={hoveredBox === index}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                />
              </div>
            ))}
          </div>



          <p style={{fontSize: '.7em'}}>At Neeti Legal, we are dedicated to providing exceptional legal services across these diverse practice areas. Our attorneys are not only experts in their fields but also have a deep commitment to understanding our clients’ unique needs. We believe in forging lasting partnerships with our clients and offering them the legal support they need to succeed in an ever-changing legal landscape.</p>
        </div>
      </section>

      <section style={{textAlign: 'center',backgroundColor: '#16214f'}}>
        <h1 style={{fontFamily: 'Nanum Myeongjo, serif',color: '#fff', fontWeight: 'bold'}}><b>Founders</b></h1>
      </section>
      {/* Circle with Flipping Image Section */}
      <CircleSection />
      <AnotherCircleSection />
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
    </div>
  );
};

export default About;