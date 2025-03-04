import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/image_preview_rev_1.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon3.png';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/omesh-singh/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/omeshsingh"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/oz_offi_cial?utm_source=qr&igsh=YnppYjV4NnB1Y3B2"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright OZ. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
