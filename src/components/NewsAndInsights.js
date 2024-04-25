import React, { useState,useEffect } from 'react';
import Image1 from '../image/ni1.png';
import Image2 from '../image/ni2.jpg';
import Image3 from '../image/ni3.jpeg';
import Image4 from '../image/ni4.jpeg';
import Image5 from '../image/ni5.png';
import './NewsAndInsights.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Footer from './Footer'; 
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  // window.scrollTo({ top: 0, behavior: 'auto' });
  window.scrollTo(0, 0);
};

const NewsAndInsights = () => {

  return (
    <div>
      <div className='ni1'>
        <h1 style={{fontFamily: 'Playfair Display, serif'}}>Unlocking Success: Insights, Tips, and More on Our Blogs</h1>
        <img src={Image1} alt='Blogs'></img>
      </div>
      <div className='blogs'>
          <Card sx={{ maxWidth: 380 }} className='blogcard' >
          <CardActionArea><Link to='/news-and-insights/why-does-every-business-need-an-outsourced-legal-department?' className='link' onClick={scrollToTop}>
          <CardMedia
            component="img"
            alt="Blog1 Image"
            height="280"
            image={Image2} 
            className='cardimage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='bloghead' style={{fontFamily: "Nanum Myeongjo, serif"}}>
              WHY DOES EVERY BUSINESS NEED AN OUTSOURCED LEGAL DEPARTMENT?
            </Typography>
            <Typography variant="body2" color="text.secondary" className='blogdetail' style={{fontFamily: "Nanum Myeongjo, serif"}}>         
              Outsourced legal departments offer expertise, cost-effectiveness, and flexibility, vital for businesses navigating complex legal landscapes efficiently...
            </Typography>
          </CardContent>
          <CardActions style={{marginTop: '5px'}} className='datelink'>
            <Link to='/news-and-insights/why-does-every-business-need-an-outsourced-legal-department?' className='readButton' onClick={scrollToTop} style={{fontFamily: "Nanum Myeongjo, serif"}}>Read Full Article<ArrowRightAltIcon></ArrowRightAltIcon></Link>
            <p style={{marginLeft: '120px', marginTop: '10px', fontFamily: "Nanum Myeongjo, serif"}} className='dateblog'>22nd Jan</p>
          </CardActions>
          </Link>
          </CardActionArea>
        </Card>

        {/* Blog 2 */}
        <Card sx={{ maxWidth: 380 }} className='blogcard'>
          <CardActionArea ><Link to='/news-and-insights/five-signs-your-business-needs-legal-assistance-right-now' className='link' onClick={scrollToTop}>
          <CardMedia
            component="img"
            alt="Blog2 Image"
            height="280"
            image={Image3}
            className='cardimage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='bloghead' style={{fontFamily: "Nanum Myeongjo, serif"}}>
            FIVE SIGNS YOUR BUSINESS NEEDS LEGAL ASSISTANCE RIGHT NOW
            </Typography>
            <Typography variant="body2" color="text.secondary" className='blogdetail' style={{fontFamily: "Nanum Myeongjo, serif"}}>         
            Running a successful business involves navigating a myriad of challenges, and legal issues are an inevitable part of the journey. Whether you're a startup entrepreneur or a seasoned business owner, recognizing when to seek legal aid ...
            </Typography>
          </CardContent>
          <CardActions className='datelink'>
            <Link to='/news-and-insights/five-signs-your-business-needs-legal-assistance-right-now' className='readButton' onClick={scrollToTop} style={{fontFamily: "Nanum Myeongjo, serif"}}>Read Full Article<ArrowRightAltIcon></ArrowRightAltIcon></Link>
            <p style={{marginLeft: '120px', marginTop: '10px', fontFamily: "Nanum Myeongjo, serif"}}  className='dateblog'>22nd Jan</p>
          </CardActions>
          </Link>
          </CardActionArea>
        </Card>

        {/* Blog 3 */}
        <Card sx={{ maxWidth: 380 }} className='blogcard'>
          <CardActionArea><Link to='/news-and-insights/debunking-myths:can-small-business-afford-a-legal-team?' className='link' onClick={scrollToTop}>
          <CardMedia
            component="img"
            alt="Blog3 Image"
            height="280"
            image={Image4}
            className='cardimage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='bloghead' style={{fontFamily: "Nanum Myeongjo, serif"}}>
            DEBUNKING MYTHS: CAN A SMALL BUSINESS AFFORD A LEGAL TEAM?
            </Typography>
            <Typography variant="body2" color="text.secondary" className='blogdetail' style={{fontFamily: "Nanum Myeongjo, serif"}}>         
            As a small business owner, navigating the complexities of legal matters can often feel daunting. From contracts and intellectual property rights to employment issues and regulatory compliance, the need for legal guidance and support is undeniable...
            </Typography>
          </CardContent>
          <CardActions className='datelink'>
            <Link to='/news-and-insights/why-does-every-business-need-an-outsourced-legal-department?' className='readButton' onClick={scrollToTop} style={{fontFamily: "Nanum Myeongjo, serif"}}>Read Full Article<ArrowRightAltIcon></ArrowRightAltIcon></Link>
            <p style={{marginLeft: '120px', marginTop: '10px', fontFamily: "Nanum Myeongjo, serif"}}  className='dateblog'>22nd Jan</p>
          </CardActions>
          </Link>
          </CardActionArea>
        </Card>
      </div>
      <div className='blogsection2'>
        {/* Blog 4 */}
        <Card sx={{ maxWidth: 380 }} className='blogcard4'>
          <CardActionArea><Link to='/news-and-insights/resolving-payment-disputes-for-MSMES:why-online-dispute-resoltuion-is-the-need-of-the-hour' className='link' onClick={scrollToTop}>
          <CardMedia
            component="img"
            alt="Blog4 Image"
            height="280"
            image={Image5}
            className='cardimage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='bloghead' id='bloghead4' style={{fontFamily: "Nanum Myeongjo, serif"}}>
              RESOLVING PAYMENT DISPUTES FOR MSMES: WHY ONLINE DISPUTE RESOLUTION IS THE NEED OF THE HOUR
            </Typography>
            <Typography variant="body2" color="text.secondary" className='blogdetail' id='blogdetail4' style={{fontFamily: "Nanum Myeongjo, serif"}}>         
            In the dynamic landscape of business operations, Micro, Small, and Medium Enterprises (MSMEs) often encounter various challenges. One of the most common hurdles faced by MSMEs is payment disputes...
            </Typography>
          </CardContent>
          <CardActions className='datelink'>
            <Link to='/news-and-insights/resolving-payment-disputes-for-MSMES:why-online-dispute-resoltuion-is-the-need-of-the-hour' className='readButton' onClick={scrollToTop} style={{fontFamily: "Nanum Myeongjo, serif"}}>Read Full Article<ArrowRightAltIcon></ArrowRightAltIcon></Link>
            <p style={{marginLeft: '120px', marginTop: '10px', fontFamily: "Nanum Myeongjo, serif"}}  className='dateblog'>22nd Jan</p>
          </CardActions>
          </Link>
          </CardActionArea>
        </Card>
      </div>

      <div style={{height: '80vh'}} className='newsfooter'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default NewsAndInsights;
