import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/BannerBG.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { Navbar, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon-new1.svg';
import navIcon2 from '../assets/img/nav-icon-new2.svg';
import navIcon3 from '../assets/img/nav-icon-new3.svg';
import navIcon4 from '../assets/img/nav-icon-new4.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Всегда с тобой", "Дома ", "В другой стране" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }



  const [activeLink, setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }





  return (
    <section className="banner" id="home">

<Router>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="/">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}></Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}></Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}></Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://dzen.ru/id/5f3bceee70d985686bb768b9"><img src={navIcon1} alt="" /></a>
                <a href="https://vk.com/public218860758"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="https://t.me/psihologichnochannel"><img src={navIcon4} alt="" /></a>
              </div>
              <HashLink to=''>
                <a href="https://t.me/psihologichno_bot"> <button onClick={() => console.log('https://t.me/psihologichno_bot')} className="vvd" >Перейти в Telegram</button></a>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>


      <Container className="banners">
        <Row className="aligh-items-center">
          <Col classname = "bannerClass"xs={12} md={6} xl={7}>
            
              <div>
                <h1> Психолог, который всегда с тобой!</h1>
                  <p>Доступная для каждого психологическая помощь через Telegram-бот</p>
                  
            
              
                    
            
          
                  <a href="https://t.me/psihologichno_bot"> <button onClick={() => console.log('https://t.me/psihologichno_bot')} href="https://t.me/psihologichno_bot" className = "tgbutton">Перейти в телеграм <ArrowRightCircle size={25} /></button></a>
              </div>
            
          </Col>
          
          <Col classname = "colImg" xs={12} md={6} xl={5}>
            
              
                <div className="bannerimg">
                  <img src={headerImg} alt="Header Img"/>
                </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
