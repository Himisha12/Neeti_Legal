import React, { useState, useEffect } from 'react';
import aboutImage1 from '../image/abou1.png';
import aboutImage2 from '../image/about5.png';
import aboutImage3 from '../image/about6.png';
import founder1 from '../image/about2.png';
import founder2 from '../image/about4.png';

import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./About.css";
import Footer from './Footer.js';




const About = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

 

  const [expanded, setExpanded] = useState([false, false, false]); // Array to track expanded state for each accordion

  const toggleAccordion = (index) => {
    const newExpanded = [...expanded]; // Copy the array
    newExpanded[index] = !newExpanded[index]; // Toggle the expanded state for the clicked accordion
    setExpanded(newExpanded); // Update the state
  };

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };


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
  
  const handleDisclaimerClick = () => {
    window.location.href = 'https://www.google.com';
  };
 
  const ExpandIcon = ({ expanded }) => {
    return (
      <div className="plus-sign-container">
        <div className="plus-sign-background">
          {expanded ? <span className="minus-sign">-</span> : <span className="plus-sign">+</span>}
        </div>
      </div>
    );
  };

  const accordionData = [
    {
      title: 'Intellectual Property Rights (IPR)',
      content: 'In the era of innovation and creativity, safeguarding intellectual property has become a critical aspect of business strategy. Our IPR team comprises skilled attorneys who understand the intricacies of patents, trademarks, copyrights, and trade secrets. Whether you are a tech startup protecting your innovations or a creative artist preserving your work, our experts provide comprehensive legal solutions that uphold your intellectual property rights.'
    },
    {
      title: 'Mediation/Arbitration/Negotiation',
      content: 'Legal disputes can be lengthy and expensive, but our mediation, arbitration, and negotiation experts are adept at finding cost-effective and efficient solutions. We are skilled in facilitating amicable resolutions, reducing litigation time and costs, and ensuring that our clients’ interests are protected during negotiations or dispute resolution processes.'
    },
    {
      title: 'Class Action ',
      content: 'Class actions are powerful tools for seeking justice on behalf of a group of individuals facing similar legal issues. Our class action attorneys possess an in-depth understanding of the complexities involved in representing and guiding plaintiffs and defendants in class action suits, ensuring that justice is served efficiently and equitably.'
    },
    {
      title: 'Investor-Founder Disputes',
      content: 'In the ever-evolving startup ecosystem, disputes between investors and founders can arise. Our legal team specializes in mediating and resolving these complex conflicts, safeguarding the interests of both parties and fostering an environment where business growth can continue unimpeded.'
    },
    {
      title:'Recovery Suits',
      content: 'Recovery suits play a significant role in securing unpaid debts or recovering assets. Neeti Legal excels in handling these cases, leveraging our knowledge of debt recovery laws and regulations to help clients regain what is rightfully theirs.'
    },
    {
      title: 'Insurance Claims',
      content: 'In a world full of uncertainties, insurance claims are a crucial means of protection. Our insurance experts assist clients in navigating the intricacies of insurance policies, helping them secure rightful compensation after unforeseen events or accidents.'
    },
    {
      title: 'Start-up Advisory ',
      content: 'Startups often require guidance in legal matters as they scale and face various challenges. Our startup advisory team offers comprehensive legal support, from business formation and regulatory compliance to intellectual property protection and contract negotiation, ensuring that startups have a solid legal foundation to thrive.'
    },
    {
      title: 'Cyber Crimes',
      content: 'In an increasingly digital world, cybercrimes have become more prevalent. Our cyber practice area specializes in assisting clients who are victims of cyber crimes or need guidance on cybersecurity measures. We help clients navigate the legal complexities of cyber incidents, ensuring that their rights are protected in the digital realm.'
    }
  ];
  
  return (
    <div >
      <div className='aboutSection'>
        <img src={aboutImage1} alt='aboutImage1' className='image1'></img>
        <div className='aboutText' style={{fontFamily: "Nanum Myeongjo, serif"}}>
          <h1 style={{color: '#16214f', textAlign: 'center'}}>About Neeti Legal</h1>
          <p>Neeti Legal is a new-age law firm, where cutting-edge technology meets legal expertise to revolutionize your experience. Founded by legal minds honed at top-tier institutions and renowned firms, we bring a fresh perspective to navigating the legal landscape.
          <br></br>
          <span>Here's what sets us apart:</span>
          <ul>
            <li>Innovation at Your Doorstep: We're at the forefront of legal tech, offering solutions tailored to your specific needs.</li>
            <li>Early-Stage Guidance: Don't face legal challenges alone. We analyze your situation, suggest the best course of action, and craft the right strategy for success.</li>
            <li>Funding Made Easy: We understand legal battles can be expensive. That's why we're the first Indian firm partnering with trusted financiers to help you secure the resources you need.</li>
            <li>National Network: Wherever you are in India, our network of 300+ vetted attorneys is ready to address your legal concerns with exceptional service and unwavering commitment.</li>
          </ul>
          </p>
        </div>
      </div>

      <div className='expertiseAreas'>
      <div className='accordionContainer'>

      {accordionData.map((item, index) => (
            <Accordion key={index} className='accordion' expanded={expanded[index]} onChange={() => toggleAccordion(index)}>
              <AccordionSummary
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
                expandIcon={<ExpandIcon expanded={expanded[index]} />}
              >
                <Typography className='accordionTitle' style={{fontFamily: 'Playfair Display, serif'}} >{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='accordionContent' style={{fontFamily: "Nanum Myeongjo, serif"}}>
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
 
          </div>
            <div className='expertise1'>
              <h1 className='expertiseText' style={{fontFamily: 'Playfair Display, serif'}}>OUR EXPERTISE</h1>
              <div className='aboutImage23'>
              <img src={aboutImage2} className='about2'alt='Aboutimage2' style={{marginRight: '0%'}}></img>
              <img src={aboutImage3} className='about3' alt='About Image 3' style={{ marginLeft: '-15%' }}/>
            </div>
          </div>
        </div>
       
        <div className='founders'>
          <h1 style={{fontFamily: 'Playfair Display, serif'}}>OUR FOUNDERS</h1>
          <div className='foundersection'>
            <div class="containar">
              <div class="lay">
                <h2 className='founder1' style={{fontFamily: "Nanum Myeongjo, serif"}}>Rajat Kumar</h2>
              </div>
                  <p style={{fontFamily: "Nanum Myeongjo, serif"}}><b style={{fontFamily: 'Playfair Display, serif', fontSize: '25px'}}>Advocate</b><br></br>
                    Supreme Court of<br></br> India, New Delhi<br></br>
                    Master of Business Laws, National <br></br>Law School of India University,<br></br> Bangalore <br></br>
                    B.A., LL.B (Hons.), LL.M.</p>
              <div class="image-container">
                <img src={founder1} alt="Founder Image"></img>
              </div>
                    
              <div class="line">
                  </div>
            </div>

            <div className='fcontainer2'>
                <div className='lay'>
                  <h2 className='founder2' style={{fontFamily: "Nanum Myeongjo, serif",}}>Devesh Kumar</h2>
                </div>
                <p style={{fontFamily: "Nanum Myeongjo, serif"}}><b style={{fontFamily: 'Playfair Display, serif', fontSize: '25px'}}>Advocate</b><br></br> Supreme Court of <br></br>India, New Delhi<br></br>
                  B.B.A., LL.B. (Business Law <br></br>Hons.), National Law University,<br></br> Jodhpur</p>
                  <div className='image-container2'>
                    <img src={founder2} alt='Founder2 Image'></img>
                  </div>
            </div>
          </div>
        </div>
          

        
      <div style={{
        height: '90vh', position: 'relative', backgroundColor: '#E2E4ED'
      }} className='aboutfooter'>
        <Footer></Footer>
      </div>
          
    </div>
  );
};

export default About;