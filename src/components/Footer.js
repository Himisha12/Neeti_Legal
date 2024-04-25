import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    const scrollToTop = () => {
      // window.scrollTo({ top: 0, behavior: 'auto' });
      window.scrollTo(0, 0);
    };

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
  return (
    <div>
    <div className="container7">
        <p className="connect">CONNECT</p>
        <div className="iconWrapper">
          <div className="iconCircle">
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </div>
          <div id="number" className="contactInfo" style={{fontFamily: "Nanum Myeongjo, serif"}}>
            <a
              href="http://wame.pro/1hav1o"
              target="_blank"
              rel="noopener noreferrer"
              className="contactLink"
            >
              +91 96940 59074
            </a>
            <a
              href="http://wame.pro/1hvl55"
              target="_blank"
              rel="noopener noreferrer"
              className="contactLink"
            >
              +91 95493 78454
            </a>
          </div>
          <div className="iconCircle">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="contactInfo" style={{fontFamily: "Nanum Myeongjo, serif"}}>
            <a href="mailto:admin@neetilegal.in" className="contactLink" id='mail'>
              admin@neetilegal.in
            </a>
          </div>
        </div>
        <div className="quicklinks" style={{fontFamily: "Nanum Myeongjo, serif"}}>
          <Link
            to="/contact-us#get-in-touch-section"
            onClick={scrollToTop}
            style={{ textDecoration: "none" }}
          >
            <span>Careers</span>
          </Link>
          <Link to="/news-and-insights" onClick={scrollToTop} style={{ textDecoration: "none" }}>
            <span>News and Insights</span>
          </Link>
          <Link to="/terms-of-use" onClick={scrollToTop} style={{ textDecoration: "none" }}>
            <span>Terms Of Use</span>
          </Link>
          <Link to="/privacy-policy" onClick={scrollToTop} style={{ textDecoration: "none" }}>
            <span>Privacy Policy</span>
          </Link>
        </div>
        <div className="follow">
          <h2
            className="followtext"
            style={{ color: "#16214f", marginTop: "20px", textAlign: "center" ,fontFamily: "Nanum Myeongjo, serif"}}
          >
            Follow Us
          </h2>
          <div className="inslink">
          <a
            href="https://www.instagram.com/neetilegal?igsh=MmVlMjlkMTBhMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#16214f", margin: "5px 10px 0px 40px" }}
            ></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/company/neeti-legal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#16214f", margin: "5px 0px 0px 0px" }}
            ></FontAwesomeIcon>
          </a>
          </div>
        </div>
        <p className="last" style={{ marginTop: "20px", fontSize: "20px", fontFamily: "Nanum Myeongjo, serif" }}>
          &copy; 2023 Neeti Legal. All rights reserved. |{" "}
          <a href="#" onClick={() => setShowDisclaimer(true)}>
            Disclaimer
          </a>
        </p>
      </div>

      {showDisclaimer && (
        <div
          className="disclaimerContainer"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
            "@media (max-width: 768px)": {
              width: "50%",
            },
          }}
        >
          <div
            className="disclaimer"
            style={{
              background: "#fff",
              padding: "12px",
              maxWidth: "1100px",
              textAlign: "justify",
              fontSize: "18px",
              "@media (max-width: 768px)": {
                fontSize: "1em",
                width: "50%",
              },
            }}
          >
            <h2
              className="disclaimerHead"
              style={{
                textAlign: "center",
                color: "#16214f",
                fontFamily: "Nanum Myeongjo, serif"
              }}
            >
              Disclaimer
            </h2>
            <p className="disclaimerText" style={{ marginTop: "20px",fontFamily: "Nanum Myeongjo, serif" }}>
              This website has been designed only for the purposes of
              dissemination of basic information on Neeti Legal; information
              which is otherwise available on the internet, various public
              platforms and social media. Careful attention has been given to
              ensure that the information provided herein is accurate and
              up-to-date. However, Neeti Legal is not responsible for any
              reliance that a reader places on such information and shall not be
              liable for any loss or damage caused due to any inaccuracy in or
              exclusion of any information, or its interpretation thereof.
              Reader is advised to confirm the veracity of the same from
              independent and expert sources.
            </p>
            <p className="disclaimerText" style={{fontFamily: "Nanum Myeongjo, serif"}}>
              This website is not an attempt to advertise or solicit clients,
              and does not seek to create or invite any lawyer-client
              relationship. The links provided on this website are to facilitate
              access to basic information on Neeti Legal, and, to share the
              various thought leadership initiatives undertaken by it. The
              content herein or on such links should not be construed as a legal
              reference or legal advice. Readers are advised not to act on any
              information contained herein or on the links and should refer to
              legal counsels and experts in their respective jurisdictions for
              further information and to determine its impact. Neeti Legal uses
              cookies on its website to improve its usability. This helps us in
              providing a good user experience and to also help in improving our
              website. By continuing to use our website without changing your
              privacy settings, you agree to use our cookies.
            </p>

            <div className="accdec"
              style={{
                // marginTop: "20px",
                // display: "flex",
                // flexDirection: 'row',
                // justifyContent: 'flex-start'
                // justifyContent: "flex-end",
              }}
            >
              {/* <button className="decide" onClick={() => setShowDisclaimer(false)} style={{ marginRight: '10px', padding: '10px 20px', background: '#001f3f', color: '#fff', cursor: 'pointer',fontSize:'20px',border: 'none'}}>
                Accept
              </button>
              <button className="decide" onClick={handleDisclaimerClick} style={{ padding: '15px 25px', background: '#d9d9d9', cursor: 'pointer',fontSize:'20px', border: 'none' }}>
                Decline
              </button> */}
              <button
                className="decide acceptButton" style={{fontFamily: "Nanum Myeongjo, serif"}}
                onClick={() => setShowDisclaimer(false)}
              >
                Accept
              </button>
              <button
                className="decide declineButton" style={{fontFamily: "Nanum Myeongjo, serif"}}
                onClick={handleDisclaimerClick}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}

export default Footer;
