import React, { useEffect } from 'react';
import './PrivacyPolicy.css';
import Footer from './Footer';

import { Link } from 'react-router-dom';

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

const PrivacyPolicy = () => {
 
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
    <div style={{fontFamily: 'Nanum Myeongjo, serif', fontSize: '16px'}} >
    <div style={{ marginTop: '30px', }} className='policysec1'>
    <h1 style={{color: '#16214f',fontFamily: 'Nanum Myeongjo, serif', textAlign: 'center',}}>PRI<span style={underlineStyles}>VACY POL</span>ICY</h1>
    <br></br>
    <div style={{ marginRight: '70px', marginLeft: '70px'}} className='policysec1'>
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
       <p>If you have any concerns or questions regarding our Privacy Policy, please <Link to= '/contact-us' onClick={scrollToTop}>contact us!</Link></p>
       <br></br>
      </ol>
      </div>
    </div>
    </div>
    

    <div style={{
      height: '80vh'
    }} className='policyfooter'>
      <Footer></Footer>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
