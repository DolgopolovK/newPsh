import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon-new1.svg";
import navIcon2 from "../assets/img/nav-icon-new2.svg";
import navIcon3 from "../assets/img/nav-icon-new3.svg";
import navIcon4 from '../assets/img/nav-icon-new4.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div class="lineFooterFlex">
        <div className="lineFooter"></div>
      </div>
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
              <a href="#"><img src={navIcon4} alt="Icon" /></a>
            </div>
            
          </Col>
          <Col size={12} xs={12} sm={12}  className=" text-right ">
          <div className="number">
              <p classname = "numbers">+7 910 225 12 80</p>
            </div>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}
