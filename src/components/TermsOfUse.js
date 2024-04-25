import React, { useState,useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './TermsOfUse.css';
import Footer from './Footer';

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

const TermsOfUse = () => {


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


  const underlineStyles = {
    borderBottom: '3px solid #d5984e', // Golden color
    display: 'inline-block', // Make sure the underline only spans the text width
    paddingBottom: '7px', // Adjust as needed
  };

  return (
    <div>
    <div style={{fontFamily: 'Playfair Display, serif'}} >
    <div style={{ marginTop: '30px',marginLeft: '70px',marginRight: '70px' }} className='termssec1'>
    <h1 style={{color: '#16214f',fontFamily: 'Nanum Myeongjo, serif', textAlign: 'center',}}>TER<span style={underlineStyles}>MS OF&nbsp;</span>USE</h1>
    <br></br>
      <p style={{fontSize: '18px',}}>Welcome to <strong>Neeti Legal!</strong> By accessing and using our website, <strong><Link to='/home' style={{textDecoration: 'none',}}>"www.neetilegal.in"</Link></strong>, you agree to be bound by these Terms of Use <strong>(the "Terms")</strong>, our Privacy Policy, and Disclaimer. Your use of the Website signifies your consent to comply with and be legally bound by these Terms, including our Privacy Policy and Disclaimer. Additionally, you expressly agree not to infringe or violate any of Neeti Legal’s rights, including intellectual property rights such as copyright or trademark.
The Terms, when read together with our Privacy Policy, form a legal and binding agreement between you and Neeti Legal and are enforceable under the laws of India. By accepting these Terms, you represent and warrant that you are at least 18 years of age and have the legal capacity, authority, and right to enter into this agreement.
</p>
<br></br>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>GENERAL INFORMATION</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Neeti Legal reserves the right to change the information, material, and content provided on the Website without prior notice.</li>
  <li style={{paddingBottom: '10px'}}>Neeti Legal is not responsible for any loss or damage resulting from errors or omissions in the information on the Website, whether due to negligence, accidents, or other causes. Furthermore, Neeti Legal disclaims any liability for the interpretation and use of the information on this Website and does not offer any express or implied warranties.</li>
  <li style={{paddingBottom: '10px'}}>Hyperlinks to third-party websites and information on the Website are provided to share the original sources of information and should not be considered referrals, endorsements, or affiliations with them. Neeti Legal takes no responsibility and makes no representations or warranties regarding the content of linked websites.</li>
  <li style={{paddingBottom: '10px'}}>Modification, editing, or out-of-context use of material on the Website is prohibited.</li>
  <li style={{paddingBottom: '10px'}}>Neeti Legal reserves the right to add, modify, change, or vary any of these Terms without prior notice.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>INTELLECTUAL PROPERTY</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>All content on the Website is protected by copyright. Certain content may also be protected as trademarks, trade secrets, or other intellectual property or proprietary rights. Users must comply with all copyright notices, trademark rules, and restrictions on the Website. You may not modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative works based on, distribute, perform, display, or exploit, in whole or in part, any of the content on the Website, except for personal, non-commercial use, provided that you maintain all copyright and other notices contained in such content.</li>
  <li style={{paddingBottom: '10px'}}>By accessing the Website, you agree not to scrape, attempt to scrape, or extract any data. You also agree not to use the Website for monitoring, benchmarking, throttling, or any other purposes that may impair its performance or functionality. You must access the content on the Website only through the interface provided by Neeti Legal.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>USE POLICY – TERMS AND CONDITIONS</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Use of the Website does not establish a client-attorney relationship. Similarly, using the Website, receiving or sending emails to our offices does not create a client-attorney relationship.</li>
  <li style={{paddingBottom: '10px'}}>Website visitors must be aware of the laws of their respective countries related to any matters mentioned on the Website. Your decision to access the Website is based on your own initiative, and you are responsible for compliance with local, national, or international laws.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>EXCLUSION OF WARRANTY</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Members, affiliates, employees, and authorized representatives of Neeti Legal provide the Website and information on an "as is" basis. They do not make any implied warranties, representations, endorsements, or conditions with respect to the Website or the information.</li>
  <li style={{paddingBottom: '10px'}}>Neeti Legal does not warrant the availability of the Website or the satisfaction of user requirements, uninterrupted access, the absence of delays, failures, errors, omissions, or the transmission of viruses to the user’s computer system. Users are solely responsible for data protection and backup.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>NO LIABILITY</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Neeti Legal is not responsible or liable for any damages or other harm arising from your use of the Website or the information contained therein. The Website is provided on an "as is" available basis.</li>
  </ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>TERMINATION OF ACCESS</strong></h4>
  <ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Neeti Legal reserves the right to immediately block any IP address from accessing the Website, with or without reason and prior notice. Termination may be carried out at Neeti Legal’s sole discretion and will not render Neeti Legal liable to any user or third party.</li>
  <li style={{paddingBottom: '10px'}}>Termination may occur if the user breaches or deviates from these Terms, if law enforcement or other government agencies make a request, or if unexpected technical issues or problems arise.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>JURISDICTION</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>These Terms are governed by the laws of India without regard to principles of conflicts of laws. For the purposes of these Terms, the courts of New Delhi shall have exclusive jurisdiction.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>INDEMNITY</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>You agree to indemnify and hold Neeti Legal harmless from all damages, liabilities, settlements, expenses, fines, penalties, costs, and attorneys’ fees arising from any claim or demand made by any third party due to or arising from your access to or use of the Website, your access to, creation of, or transmittal of any content, your violation of these Terms, or your infringement of any intellectual property or other rights of any person or entity.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>FORMAL INVESTIGATION</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Neeti Legal reserves the right to launch an investigation into complaints or reported deviations from the Terms and may take appropriate actions, including reporting suspected unlawful activity to law enforcement officials, regulators, or third parties. Neeti Legal may disclose necessary information related to users’ profiles, email addresses, usage history, IP addresses, and traffic information.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>RESERVATION OF LEGAL RIGHTS</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>Neeti Legal reserves the right to access all remedies available at law and in equity in the event of a user’s violation of these Terms.</li>
</ul>
<h4 style={{color: '#16214f',paddingBottom: '10px'}}><strong>REVISIONS TO THE TERMS</strong></h4>
<ul style={{listStyleType: 'disc', fontSize: '18px',}}>
  <li style={{paddingBottom: '10px'}}>These Terms may be revised at any time by Neeti Legal, and all changes are effective immediately upon being posted on the Website. You are responsible for periodically reviewing these Terms for updates or changes. Your use of the Website after such notice will be considered an acceptance of these changes.</li>
</ul>
<p style={{fontSize: '18px'}}>Please <Link to='/contact-us' onClick={scrollToTop}>contact us</Link> if you have any questions or concerns regarding these Terms of Use.</p>
</div>
</div>
  <div style={{
    height: '80vh'
  }} className='termsfooter'>
    <Footer></Footer>
  </div>
    </div>
  );
};

export default TermsOfUse;
