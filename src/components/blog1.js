import React, { useState, useEffect } from "react";
import logo from "../image/logo.png";
import blog1 from "../image/ni2.jpg";
import Footer from "./Footer";
import './Blog1.css';
import { Link } from "react-router-dom";

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

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
        }} className="blog1sec1"
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
            backgroundColor: "rgba(0, 0, 20, 0.7)",
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
          }} className="blog1date"
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
          <strong className="blog1head">
            WHY DOES EVERY{" "}
            <span style={underlineStyles}>BUSINESS NEED AN OUTSOURCED</span>{" "}
            LEGAL DEPARTMENT?
          </strong>
        </h2>
      </div>
      <div style={{fontFamily: "Nanum Myeongjo, serif",marginTop: '30px',marginRight: '60px',marginLeft: '60px', fontSize: '18px', textAlign: 'justify'}} className="blog1text">
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
        <p><i><Link to="/contact-us" onClick={scrollToTop}>Connect with us</Link> for more insights on legal strategies and business success!</i></p>
      </div>
      <div style={{
        height : '80vh'
      }} className="blog1footer">
        <Footer></Footer>
      </div>

          </div>
  );
};
export default Blog1;
