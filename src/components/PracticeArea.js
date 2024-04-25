import React, { useState ,useEffect} from 'react';
import prac1 from '../image/prac1.png';
import prac2 from '../image/prac2.png';
import prac3 from '../image/prac3.png';
import prac4 from '../image/prac4.png';
import Practice from '../image/practice1.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import gold from '../image/practice2.jpg';
import logo from '../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./PracticeArea.css";
import Footer from './Footer';

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

const PracticeArea = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    console.log("Inside useEffect");
    const disclaimerShown = localStorage.getItem('disclaimerShown');

    if (!disclaimerShown) {
      setShowDisclaimer(true);
      localStorage.setItem('disclaimerShown', 'true');
    }
  }, []);

  const handleDisclaimerClick = () => {
    window.location.href = 'https://www.google.com';
  };

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

  useEffect(() => {
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    const box4 = document.getElementById('box4');
  
    const handleBox2Hover = () => {
      box4.style.height = '168px';
      box2.style.height='500px'
      box3.classList.add('shift-up');
      const hiddenElements = box4.querySelectorAll('.hidden-text, .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'none';
      });
      const hiddenElements1 = box2.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'block';
      });
    };
  
    const handleBox2MouseOut = () => {
      box2.style.height = '340px';
      box4.style.height= '340px';
      box3.classList.remove('shift-up');
      const hiddenElements = box4.querySelectorAll(' .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'block';
      });
      const hiddenElements1 = box2.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'none';
      });
    };
  
    if (box2) {
      box2.addEventListener('mouseenter', handleBox2Hover);
      box2.addEventListener('mouseleave', handleBox2MouseOut);
    }
  
    return () => {
      if (box2) {
        box2.removeEventListener('mouseenter', handleBox2Hover);
        box2.removeEventListener('mouseleave', handleBox2MouseOut);
      }
    };
  }, []);
  useEffect(() => {
    const box1 = document.getElementById('box1');
    const box3 = document.getElementById('box3');
    const box4 =document.getElementById('box4');
  
    const handleBox1Hover = () => {
      box1.style.height = '500px';
      box3.style.height= '168px';
      box4.classList.add('shift-up');
      const hiddenElements = box3.querySelectorAll('.hidden-text, .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'none';
      });
      const hiddenElements1 = box1.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'block';
      });
    };
  
    const handleBox1MouseOut = () => {
      box1.style.height = '340px';
      box3.style.height= '340px';
      box4.classList.remove('shift-up');
      const hiddenElements = box3.querySelectorAll(' .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'block';
      });
      const hiddenElements1 = box1.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'none';
      });
    };
  
    if (box1) {
      box1.addEventListener('mouseenter', handleBox1Hover);
      box1.addEventListener('mouseleave', handleBox1MouseOut);
    }
  
    return () => {
      if (box1) {
        box1.removeEventListener('mouseenter', handleBox1Hover);
        box1.removeEventListener('mouseleave', handleBox1MouseOut);
      }
    };
  }, []);
  
  useEffect(() => {
    const box3 = document.getElementById('box3');
    const box1 = document.getElementById('box1');

    const handleBox3Hover = () => {
      box1.style.height = '168px';
      box3.style.height= '500px';
      box3.classList.add('shift-up');
      const hiddenElements = box1.querySelectorAll('.hidden-text, .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'none';
      });
      const hiddenElements1 = box3.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'block';
      });
    };

    const handleBox3MouseOut = () => {
      box1.style.height = '340px';
      box3.style.height='340px';
      box3.classList.remove('shift-up');
      const hiddenElements = box1.querySelectorAll(' .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'block';
      });
      const hiddenElements1 = box3.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'none';
      });
    };

    if (box3) {
      box3.addEventListener('mouseenter', handleBox3Hover);
      box3.addEventListener('mouseleave', handleBox3MouseOut);
    }

    return () => {
      if (box3) {
        box3.removeEventListener('mouseenter', handleBox3Hover);
        box3.removeEventListener('mouseleave', handleBox3MouseOut);
      }
    };
  }, []);
  useEffect(() => {
    const box4 = document.getElementById('box4');
    const box2 = document.getElementById('box2');

    const handleBox4Hover = () => {
      box4.style.height= '500px';
      box2.style.height = '168px';
      const hiddenElements = box2.querySelectorAll('.hidden-text, .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'none';
      });
      const hiddenElements1 = box4.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'block';
      });
    };

    const handleBox4MouseOut = () => {
      box4.style.height= '340px'
      box2.style.height = '340px';
      const hiddenElements = box2.querySelectorAll(' .box img');
      hiddenElements.forEach(element => {
        element.style.display = 'block';
      });
      const hiddenElements1 = box4.querySelectorAll('.hidden-text');
      hiddenElements1.forEach(element => {
        element.style.display = 'none';
      });
    };

    if (box4) {
      box4.addEventListener('mouseenter', handleBox4Hover);
      box4.addEventListener('mouseleave', handleBox4MouseOut);
    }

    return () => {
      if (box4) {
        box4.removeEventListener('mouseenter', handleBox4Hover);
        box4.removeEventListener('mouseleave', handleBox4MouseOut);
      }
    };
  }, []);


  return(
    <div className='practicecontainer'>
      <div className='practiceText'>
        <h1 id='our'>OUR</h1>
        <h1 id='practice'>PRACTICE</h1>
        <h1 id='area'>AREA</h1>
      </div>
      <div class="boxes" style={{fontFamily: "Nanum Myeongjo, serif"}}>
      <div className='row1'>
      <div class="box" id="box1">
            <h4>Commercial Law Practice</h4>
            <p class="text">Partnerships and Joint Ventures, Tenders, Foreign Collaborations, Memoranda of Understanding, Indemnity, Non-Disclosure, Lease, Sales and Purchase, Security/Pledge, Employment...</p>
            <p class="hidden-text">Non-compete, Independent Contractors, Software Licensing, Technology Transfer, Strategic Alliance, Private Label, and IP Commercialization are all crucial facets of modern business and legal frameworks. These various contractual arrangements and agreements underpin the functioning of businesses, transactions, and collaborations across diverse industries and domains, serving as the legal bedrock for operations, innovation, and strategic growth.</p>
            <img src={prac1} alt="Image1"></img>
        </div>
        
        <div class="box" id='box2'>
          <h4>General Corporate Advisory</h4>
          <p className='text'>We at Neeti Legal are experienced in a wide range of matters, from General Corporate Advisory, Corporate Governance, Exchange Control Regulations to Mergers and Acquisitions, Joint Ventures</p>
          <p class="hidden-text">and strategic partnerships, takeovers, outbound investments etc. Our work in this area is perfectly suited to the diverse and evolving business environment in India. Keeping the Firm ahead of its peers is its unique combination of experience and commitment, which enables clients to mitigate risk and achieve business and growth objectives.</p>
          <img src={prac2} alt='Image2'></img>
        </div>
      </div>
        <div className='row2'>
        <div class="box" id='box3'>
          <h4>NCLT/IBC Practice</h4>
          <p class="text">We represent Corporate clients in litigation proceedings under all aspects of Business and Corporate law in India before various courts and tribunals.</p>
          <p class="hidden-text">We also act as Retainer Counsel on the Advisory Panels of various Software and Manufacturing companies. We provide consultation in matters under the Insolvency and Bankruptcy Code, 2016 (IBC) and advise secured and unsecured creditors on various aspects of their claims under the IBC. Our expertise also lies in handling cases on behalf of Liquidators and Receivers.</p>
          <img src={prac3} alt='Image3'></img>
        </div>
        <div class="box" id='box4'>
          <h4>Dispute Resolution</h4>
          <p class="text">
          <ul>
            <li>Arbitration</li>
          </ul>
          </p>
          <p class="hidden-text">
            <ul>
              <li>Litigation</li>
              <br></br>
              <li>White Collar Investigation</li>
            </ul>
          </p>
          <img src={prac4} alt='Image4'></img>
        </div>
        </div>

        
      </div>

      
      <div className='pracfoot'>
        <Footer></Footer>
      </div>
    </div>

  );
};

export default PracticeArea;
