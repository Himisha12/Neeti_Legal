import React, { useState, useEffect } from "react";
import homeImage1 from "../image/home1.jpg";
import homeImage2 from "../image/home2.jpg";
import homeImage3 from "../image/home3.jpg";
import homeImage4 from "../image/home4.jpeg";
import homeImage5 from "../image/home5.png";
import homeImage6 from "../image/home6.png";
import homeImage7 from "../image/home7.png";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from './Footer';

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

function Home() {
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



  return (
    <div className="home">
      <div className="homeSection1">
        <Carousel>
          <Carousel.Item interval={1500}>
            <img src={homeImage1} alt="" className="homeimage homeimage1"></img>
            <div className="overlay"></div>
            <Carousel.Caption className="carousel-caption">
              <h1 style={{fontFamily: 'Playfair Display, serif'}}>Empathy, Integrity, Justice: Our Promise to You !!</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={homeImage2} className="homeimage homeimage2"></img>
            <div className="overlay"></div>
            <Carousel.Caption className="carousel-caption">
              <h1 style={{fontFamily: 'Playfair Display, serif'}}>Next-Gen Legal Solutions with Cutting Edge Technology</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={homeImage3} className="homeimage homeimage3"></img>
            <div className="overlay"></div>
            <Carousel.Caption className="carousel-caption">
              <h1 style={{fontFamily: 'Playfair Display, serif'}}>Your rights, our expertise !!</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={homeImage4} className="homeimage homeimage4"></img>
            <div className="overlay"></div>
            <Carousel.Caption className="carousel-caption">
              <h1 style={{fontFamily: 'Playfair Display, serif'}}>Where Justice Meets Compassion & Liberation</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="textContainer" style={{fontFamily: "Nanum Myeongjo, serif"}}>
        <img src={homeImage5} className="image5"></img>
        <div className="image5Text">
          <p>
            Our lawyers have an insatiable thirst to help our clients the best
            that they can, and know nothing but perfection when it comes to
            representing our clients.
          </p>
          <h2 style={{ color: "#16214f" }}>Our Purpose</h2>
          <p>
            At Neeti Legal, our purpose is to transform the legal landscape by
            delivering forward-thinking, technology-driven solutions that
            redefine the way we approach law. We are committed to bridging the
            gap between innovation and the legal world, enabling legal
            professionals and clients to navigate their legal challenges with
            ease and efficiency. Our mission is to revolutionize legal practice
            through cutting-edge technology, making legal solutions accessible,
            efficient, and future-ready for all. Discover Next-Gen Legal
            Solutions with Neeti Legal.
          </p>
          <p>
            We are a full-service law firm with offices in Delhi NCR, Kolkata
            and Jaipur renowned for our consistently exceptional service quality
            and unwavering commitment to client satisfaction. <Link to="/about" onClick={scrollToTop}>Learn More</Link>
          </p>
        </div>
      </div>
      <div className="container2">
        <h1 className="hbl" style={{fontFamily: "Nanum Myeongjo, serif"}}>
          Humans<br></br> Before Lawyers.
        </h1>
        <div className="container3" style={{fontFamily: "Nanum Myeongjo, serif"}}>
          <h2 className="oe" style={{ color: "#16214f" }}>
            Our Expertise
          </h2>
          <p style={{ marginRight: "15px", textAlign: 'justify' }}>
            In today’s dynamic legal landscape, a law firm’s expertise across a
            range of practice areas is essential. At Neeti Legal, we take
            immense pride in our proficiency in various legal domains, each
            carefully designed to cater to the specific needs of our clients.
            Our extensive experience and commitment to excellence have allowed
            us to excel in practice areas such as{" "}
            <p style={{  fontWeight: "bold" , fontFamily: 'Playfair Display, serif', textAlign: 'justify'}}>
              <u>Intellectual Property Rights (IPR),
              Mediation/Arbitration/Negotiation, Class Action, Investor-Founder
              Disputes, Recovery Suits, Insurance Claims, Start-up Advisory, and
              Cyber-crime matters.</u><br></br>
              <Link to="/about" onClick={scrollToTop}>Read More</Link>
            </p>
          </p>
          <img src={homeImage6} className="image6"></img>
        </div>
      </div>
      <div className="container4" style={{fontFamily: "Nanum Myeongjo, serif"}}>
        <h2 className="op" style={{ color: "#16214f" }}>
          Our Principles
        </h2>
        <ul className="list" style={{textAlign: 'justify'}}>
          <li>
            Our Core Values are the 4Cs, and they lay the foundation for all our
            thoughts and actions.
          </li>
          <li>
            <span className="blue" style={{fontFamily: 'Playfair Display, serif'}}><u>Character</u></span> - Uphold the highest
            standards of fairness.
          </li>
          <li>
            <span className="blue" style={{fontFamily: 'Playfair Display, serif'}}><u>Competence</u></span> - Strive for extraordinary
            performance by combining technical expertise with emotional
            intelligence.
          </li>
          <li>
            <span className="blue" style={{fontFamily: 'Playfair Display, serif'}}><u>Commitment</u></span> - Demonstrate unwavering
            dependability and take full ownership of our broader mission.
          </li>
          <li>
            <span className="blue" style={{fontFamily: 'Playfair Display, serif'}}><u>Creativity</u></span> - Demonstrate unwavering
            dependability and take full ownership of our broader mission.
          </li>
          <Link to="/about" onClick={scrollToTop}>Read More</Link>
        </ul>
      </div>
      <div className="container5" style={{fontFamily: "Nanum Myeongjo, serif"}}>
        <h2 className="heading2" id="heading2">
          "Your Peace of Mind Starts Here: Let Us Handle the Legal Heavy
          Lifting!"
        </h2>
        <h2 className="head3" style={{ color: "#16214f" }}>
          Why We Do Everything Different
        </h2>
        <p className="para" style={{textAlign: 'justify'}}>
          We are not traditional lawyers. We collaborate, are highly energetic
          and have an insatiable thirst for success. We do not use the client’s
          money on advertising or expensive purchases. <br></br>
          <br></br>We are down to earth and our first priority is helping the
          client. That is why we are successful. We believe that law must
          conform and change as we change and for this reason, we constantly
          challenge the core and limits of law.{" "}
        </p>
      </div>
      <div className="container6" style={{ backgroundColor: "#16214f", fontFamily: "Nanum Myeongjo, serif" }}>
        <h1 className="yic">Your Initial Consultation</h1>
        <div className="scrollBox">
          <div className="scrollContent">
            <p>
              Neeti Legal stands as a forward-thinking tech-enabled law firm
              tailored for the dynamic landscape of commerce, specializing in
              providing legal support to entrepreneurs, startups, and
              businesses. Serving as the primary point of contact for our
              clients, we offer a platform for them to present their legal
              challenges. Our dedicated team meticulously analyzes these issues,
              offering effective legal solutions, and guiding clients towards
              the most appropriate legal pathways for resolution—all at no cost
              to them. Should our clients choose to pursue the recommended legal
              route, we operate on a fixed-share basis with the appointed
              service provider.
            </p>
            <p>
              At Neeti Legal, we take great pride in our expertise across
              various legal domains, each meticulously crafted to meet the
              distinct needs of our clientele. With our extensive experience and
              unwavering commitment to excellence, we have established ourselves
              as leaders in practice areas such as Private Equity/Venture
              Capital, Startup Advisory, Debt Recovery, Intellectual Property
              Rights (IPR), Alternative Dispute Resolution (ADR) including
              Mediation, Arbitration, and Negotiation, Class Action,
              Investor-Founder Disputes, Recovery Suits, Claim Management,
              Cybercrime Matters, Dispute Resolution, Economic Offenses, and
              White-Collar Crimes, etc.
            </p>
            <h5 style={{ color: "#d5984e" , textAlign: 'center'}} className="scrolll">
              Call <a href="http://wame.pro/1hav1o" target="_blank" rel="noopener noreferrer" style={{color: '#d5984e'}} >+91 9694059074</a> & <a href="http://wame.pro/1hvl55" target="_blank" rel="noopener noreferrer" style={{color: '#d5984e'}}>+91 9549378454</a> or <Link to='/contact-us' onClick={scrollToTop} style={{color: '#d5984e'}}>Contact US</Link> to get in touch.
            </h5>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
