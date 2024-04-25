import React, { useRef, useState, useEffect  } from 'react';
import styled, { keyframes } from 'styled-components';
import contact1 from '../image/contact.png';
import emailjs from '@emailjs/browser';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import Footer from './Footer';


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
    <button onClick={onClose} style={{marginLeft: '50px',width: '70px', padding: '10px', backgroundColor: 'red',borderRadius: '5px', color: 'white', border:'2px solid black'}}>Close</button>
  </div>
);

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState(null);

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

 
 
 
  const handleIconClick = (mapFrameId) => {
    // Hide all map frames
    document.querySelectorAll('.mapframe').forEach(frame => {
      frame.style.display = 'none';
    });

    // Show the selected map frame
    const mapFrame = document.getElementById(mapFrameId);
    if (mapFrame) {
      mapFrame.style.display = 'block';
    }
  };
  
  

 
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
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

  const myAnim = keyframes`
    0% {
        animation-timing-function: ease-in;
        opacity: 0;
        transform: translateY(-250px);
    }
    38% {
        animation-timing-function: ease-out;
        opacity: 1;
        transform: translateY(0);
    }
    55% {
        animation-timing-function: ease-in;
        transform: translateY(-65px);
    }
    72% {
        animation-timing-function: ease-out;
        transform: translateY(0);
    }
    81% {
        animation-timing-function: ease-in;
        transform: translateY(-28px);
    }
    90% {
        animation-timing-function: ease-out;
        transform: translateY(0);
    }
    95% {
        animation-timing-function: ease-in;
        transform: translateY(-8px);
    }
    100% {
        animation-timing-function: ease-out;
        transform: translateY(0);
    }
`;

  const AnimatedH1 = styled.h1`
    animation: ${myAnim} 5s ease 0s 1 normal forwards;
`;

  return (
    <div>
       <div className='con1area' style={{fontFamily: "Nanum Myeongjo, serif"}}>
           <div className='con2'>
           <AnimatedH1 className='getintouchText' >GET IN TOUCH</AnimatedH1>
           <p>At Neeti Legal, our commitment is to provide you with an exceptional client experience, from the moment you engage with us until your matter is resolved. With 3 strategically located offices across India, we are well-positioned to cater to your needs. Rest assured,upon reaching out to us through any channel, we pledge to respond promptly within 24 hours.</p>
           </div>
            <img src={contact1} alt='contact usimage'></img>
        </div>
      

      <div id="get-in-touch-section" class="container">
        <div class="bubble"></div>
        <div class="bubble" id="bub1"></div>
        <div class="bubble" id="bub2"></div>
        {successMessage && (
          <SuccessMessage
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}
        <form ref={form} onSubmit={sendEmail} id="contactForm" style={{fontFamily: "Nanum Myeongjo, serif"}}>
          <label htmlFor="user_name"  id="nam">Name:</label>
          <br/>
          <input type="text" id="name" name="user_name" placeholder="Enter your name"></input>
          <br/>
          <label htmlFor="user_email"  id="nam">Email:</label>
          <br/>
          <input type="email" id="email" name="user_email" placeholder="Enter your email"></input>
          <br/>
          <label name="message"  id="nam"> How can we help you?</label>
          <br/>
          <textarea id="message" name="message" placeholder="Enter your message" rows="4"></textarea>
          <div></div>
  
          <button id="btn" type="submit" value="Submit">submit</button>
          <br></br>
          <h6><b>In case of career applications and other inquries, please write us at <a href="mailto:admin@neetilegal.in" >admin@neetilegal.in</a></b></h6><br></br>
        </form>
        
    </div>

      
              
      {/* get in touch section */}
      {/* <section id="get-in-touch-section" style={{ backgroundColor: '#d5984e', fontFamily: 'Nanum Myeongjo, serif', }}>
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
        </form> */}
      {/* </section> */}
      <div className='map' style={{fontFamily: "Nanum Myeongjo, serif"}}>
        <div className='offices'>
          <h2 style={{fontFamily: 'Playfair Display, serif'}}>OUR OFFICES</h2>
          <div className='lineoffice'></div>
          <h4 style={{fontFamily: 'Playfair Display, serif'}}>Gurugram Office</h4>
          <a id='1'  onClick={() => handleIconClick('mapframe1')}><FontAwesomeIcon icon={faDirections} className='directionicon' /></a>
          <p>99, Moulsari Avenue, DLF Phase-3, Gurugram- 122010</p>
          <div className='lineoffice'></div>
          <h4 style={{fontFamily: 'Playfair Display, serif'}}>New Delhi Office</h4>
          <a id='2'  onClick={() => handleIconClick('mapframe2')}><FontAwesomeIcon icon={faDirections} className='directionicon' /></a>
          <p>12A, Pocket – D, Mayur Vihar, Phase – 2, New Delhi – 110 091</p>
          <div className='lineoffice'></div>
          <h4 style={{fontFamily: 'Playfair Display, serif'}}>Jaipur Office</h4>
          <a id='3' onClick={() => handleIconClick('mapframe3')}><FontAwesomeIcon icon={faDirections} className='directionicon' /></a>
          <p>2nd Floor, 55, Tonk Rd, Opposite Motisons Jewellers, Lalkothi, Jaipur - 302015</p>
        </div>
          <div className='mapframe' id='mapframe1'>
          <iframe width="840" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.556871390446!2d77.1037811738304!3d28.492888890411365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ecb742991b3%3A0xfd6594a981756d9e!2s99%2C%20Moulsari%20Ave%2C%20T%20Block%2C%20DLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122010!5e0!3m2!1sen!2sin!4v1713804955186!5m2!1sen!2sin" ></iframe>
          </div>
          <div className='mapframe' id='mapframe2' style={{display: 'none'}}>
          <iframe width="840" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.696907177167!2d77.29945205!3d28.617045049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4bb15fb10c3%3A0xc5737da4e3d8db81!2sPocket%20D%2C%20Mayur%20Vihar%20Phase%20II%2C%20Patparganj%2C%20Delhi!5e0!3m2!1sen!2sin!4v1713081262514!5m2!1sen!2sin"></iframe>
          </div>
          <div className='mapframe' id='mapframe3' style={{display: 'none'}}>
          <iframe width="840" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3949658436745!2d75.8045999!3d26.8909575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5719d340bef%3A0xa7949358a77e8ffa!2sBest%20Desk%20Cove!5e0!3m2!1sen!2sin!4v1713081006489!5m2!1sen!2sin" ></iframe>
          </div>
      </div>
        <div style={{
          height:'80vh'
        }} className='contactfooter'>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default ContactUs;
