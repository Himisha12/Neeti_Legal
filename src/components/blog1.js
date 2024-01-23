import React, { useState, useEffect } from "react";
import logo from "../image/logo.png";
import blog1 from "../image/blog1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Blog1 = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [hoveredDisclaimer, setHoveredDisclaimer] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const disclaimerShown = localStorage.getItem("disclaimerShown");

    if (!disclaimerShown) {
      setShowDisclaimer(true);
      localStorage.setItem("disclaimerShown", "true");
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById("scroll-to-top-button");
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.style.display = "block";
        } else {
          scrollButton.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePhoneClick = () => {
    setShowContactModal(true);
  };

  const phoneButtonStyle = {
    margin: "10px",
    cursor: "pointer",
    color: "white",
  };

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    zIndex: "1000",
  };

  const ContactModal = ({ onClose }) => {
    return (
      <div style={modalStyles} className="contact-modal">
        <p>Contact Numbers:</p>
        <p>
          Phone 1:{" "}
          <a
            href="http://wame.pro/1hav1o"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            +91 9694059074
          </a>
        </p>
        <p>
          Phone 2:{" "}
          <a
            href="http://wame.pro/1hvl55"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            +91 9549378454
          </a>
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };

  const footerSectionStyles = {
    backgroundColor: "#16214f",
    color: "#fff",
    // padding: '30px 0',
    textAlign: "center",
    borderRadius: "10px",
    marginTop: "10px",
    marginRight: "1px",
    marginLeft: "1px",
  };

  const logoStyles = {
    width: "135px", // Adjust the width as needed
    height: "auto",
    borderRadius: "8px",
    marginBottom: "auto",
    marginLeft: "0%",
  };

  const socialButtonsStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const socialButtonStyle = {
    margin: "10px",
    cursor: "pointer",
    color: "white",
  };

  const handleDisclaimerClick = () => {
    window.location.href = "https://www.google.com";
  };
  const disclaimerButtonStyles = {
    backgroundColor: hoveredDisclaimer ? "#d9d9d9" : "#d9d9d9",
    color: "#001f3f",
    padding: "10px 20px",
    fontSize: "1.2em",
    borderRadius: "8px",
    border: "2px solid white",
    cursor: "pointer",
    marginTop: "5px",
    fontFamily: "Nanum Myeongjo, serif",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    transform: hoveredDisclaimer ? "scale(1.1)" : "scale(1)",
  };

  const socialButtonHoverStyle = {
    transform: "scale(1.2)", // You can adjust the scale factor as needed
  };

  const underlineStyles = {
    borderBottom: "3px solid #d5984e", // Golden color
    display: "inline-block", // Make sure the underline only spans the text width
    paddingBottom: "7px", // Adjust as needed
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "350px",
          overflow: "hidden",
          fontFamily: "Nanum Myeongjo, serif",
        }}
      >
        <img
          src={blog1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt="Blog1"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 20, 0.8)",
          }}
        ></div>
        <h4
          style={{
            position: "absolute",
            top: "10%",
            left: "83%",
            color: "white",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          22<sup>nd</sup> January, 2024
        </h4>
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            whiteSpace: "nowrap",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
            color: "white",
          }}
        >
          <h2>
            <span style={underlineStyles}>
              1<sup>st</sup> BLOG
            </span>
          </h2>
          <br></br>
          <strong>
            WHY DOES EVERY{" "}
            <span style={underlineStyles}>BUSINESS NEED AN OUTSOURCED</span>{" "}
            LEGAL DEPARTMENT?
          </strong>
        </h2>
      </div>
      <div style={{fontFamily: "Nanum Myeongjo, serif",marginTop: '30px',marginRight: '60px',marginLeft: '60px', fontSize: '18px'}}>
        <p>
          In the dynamic landscape of business, the role of a legal department
          is often underestimated or overlooked. However, in a world where legal
          intricacies can make or break a company, having a dedicated legal team
          is not just a luxury for large corporations; it's a necessity for
          businesses of all sizes. Let's explore why every business, regardless
          of its scale, should consider establishing an outsourced legal
          department.
        </p>
        <br></br>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",}}><strong>Compliance Assurance</strong></h3>
        <p>One of the primary functions of a legal department is to ensure that a business operates within the bounds of the law. The legal landscape is complex, with regulations and compliance requirements varying across industries and jurisdictions. A legal team plays a crucial role in navigating this maze, providing the necessary guidance to keep the business compliant and avoid legal pitfalls.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Risk Mitigation</strong></h3>
        <p>Businesses inherently face risks, and legal risks are no exception. From contract disputes to intellectual property issues, the potential legal challenges are diverse. A legal department is adept at identifying and mitigating these risks, creating strategies to safeguard the business's interests and reputation. Proactive risk management can save a business from costly legal battles down the road.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Contractual Safeguards</strong></h3>
        <p>Contracts are the backbone of business relationships, outlining expectations and responsibilities. A legal department ensures that contracts are well-drafted, legally sound, and protect the interests of the company. This not only prevents disputes but also provides a solid foundation for successful partnerships and collaborations.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Intellectual Property Protection</strong></h3>
        <p>In the digital age, intellectual property is a valuable asset for many businesses. From trademarks to patents, safeguarding intellectual property rights is crucial. A legal team specializes in protecting these assets, taking legal action against infringements, and ensuring the company's creative and innovative efforts are duly recognized and secured.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Employee Relations and Labor Law Compliance</strong></h3>
        <p>Navigating the complexities of employment law is essential for any business with a workforce. A legal department assists in crafting employment contracts, handling disputes, and ensuring compliance with labor laws. This not only fosters positive employee relations but also protects the business from potential legal liabilities related to employment practices.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Crisis Management and Litigation Support</strong></h3>
        <p>When unforeseen challenges arise, having a legal department is akin to having a crisis management team. Whether it's a product recall or a regulatory investigation, legal professionals are equipped to handle the legal aspects of crises. Additionally, in the event of litigation, a legal department provides the necessary support, ensuring the company's interests are well-represented.</p>
        <h3 style={{color: '#16214f',fontFamily: "Playfair Display, serif",marginTop: '30px'}}><strong>Strategic Business Decision Support</strong></h3>
        <p>Legal considerations are integral to strategic business decisions. Whether it's entering new markets, forming alliances, or navigating mergers and acquisitions, a legal department provides invaluable insights. Their input ensures that decisions align with legal requirements, mitigating risks and fostering the long-term success of the business.</p>
        <p>A legal department is not a luxury but a strategic asset for every business. From navigating legal complexities to safeguarding assets and ensuring compliance, the role of a legal team is multifaceted. Investing in a legal department is an investment in the stability, growth, and longevity of a business, making it an indispensable component of a well-rounded corporate structure.</p>
        <br></br>
        <p><i><a href="/contact-us">Connect with us</a> for more insights on legal strategies and business success!</i></p>
      </div>

      <div style={footerSectionStyles}>
        <button
          style={{
            ...disclaimerButtonStyles,
            marginRight: "1000px",
            marginTop: "30px",
          }}
          onMouseEnter={() => setHoveredDisclaimer(true)}
          onMouseLeave={() => setHoveredDisclaimer(false)}
          onClick={() => setShowDisclaimer(true)}
        >
          Disclaimer
        </button>

        <Link to="/home" style={{ marginRight: "0px" }}>
          <img src={logo} alt="Neeti Legal Logo" style={logoStyles} />
        </Link>
        {/* Social Media Buttons */}
        <div style={socialButtonsStyles}>
          <div style={{ display: "flex" }}>
            <a
              href="https://www.instagram.com/neetilegal?igsh=MmVlMjlkMTBhMg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialButtonStyle,
                ...(hoveredIcon === "instagram" ? socialButtonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIcon("instagram")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href={() => setShowContactModal(true)}
              style={{
                ...phoneButtonStyle,
                ...(hoveredIcon === "phone" ? socialButtonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIcon("phone")}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={handlePhoneClick}
            >
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/company/neeti-legal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...socialButtonStyle,
                ...(hoveredIcon === "linkedin" ? socialButtonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:admin@neetilegal.in"
              style={{
                ...socialButtonStyle,
                ...(hoveredIcon === "mail" ? socialButtonHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredIcon("mail")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        {/* Logo and Copyright */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <br></br>
          <ul
            style={{
              listStyle: "none",
              marginLeft: "0px",
              marginRight: "30px",
              fontFamily: "Nanum Myeongjo, serif",
            }}
          >
            <p
              style={{
                fontFamily: "Nanum Myeongjo, serif",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              QUICK LINKS
            </p>
            <Link
              to="/contact-us#get-in-touch-section"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "0px",
                display: "inline-block",
              }}
            >
              <li
                style={{
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) =>
                    (e.target.parentNode.style.borderBottom = "2px solid #fff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentNode.style.borderBottom =
                      "2px solid transparent")
                  }
                >
                  Careers
                </span>
              </li>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/news-and-insights"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "0px",
                display: "inline-block",
              }}
            >
              <li
                style={{
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) =>
                    (e.target.parentNode.style.borderBottom = "2px solid #fff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentNode.style.borderBottom =
                      "2px solid transparent")
                  }
                >
                  News and Insights
                </span>
              </li>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/privacy-policy"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "0px",
                display: "inline-block",
              }}
            >
              <li
                style={{
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) =>
                    (e.target.parentNode.style.borderBottom = "2px solid #fff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentNode.style.borderBottom =
                      "2px solid transparent")
                  }
                >
                  Privacy Policy
                </span>
              </li>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/terms-of-use"
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "0px",
                display: "inline-block",
              }}
            >
              <li
                style={{
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
              >
                <span
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(e) =>
                    (e.target.parentNode.style.borderBottom = "2px solid #fff")
                  }
                  onMouseLeave={(e) =>
                    (e.target.parentNode.style.borderBottom =
                      "2px solid transparent")
                  }
                >
                  Terms of Use
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <br></br>
        <button
          id="scroll-to-top-button"
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#001f3f",
            color: "#fff",
            borderRadius: "48%",
            border: "2px solid white",
            padding: "10px",
            cursor: "pointer",
            display: "none", // Initially hide the button
          }}
        >
          {/* FontAwesome arrow icon */}
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
          <br></br>
        </button>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "10px",
            width: "100%",
          }}
        >
          <p>&copy; 2023 Neeti Legal. All rights reserved.</p>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div
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
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "8px",
              maxWidth: "1000px",
              textAlign: "justify",
              fontSize: "18px",
              "@media (max-width: 768px)": {
                fontSize: "1em",
                width: "50%",
              },
            }}
          >
            <h2>Disclaimer</h2>
            <p>
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
            <p>
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
            {/* ... (rest of the disclaimer text) */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setShowDisclaimer(false)}
                style={{
                  marginRight: "10px",
                  padding: "15px 25px",
                  borderRadius: "8px",
                  background: "#001f3f",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Accept
              </button>
              <button
                onClick={handleDisclaimerClick}
                style={{
                  padding: "15px 25px",
                  borderRadius: "8px",
                  background: "#d9d9d9",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
};
export default Blog1;
