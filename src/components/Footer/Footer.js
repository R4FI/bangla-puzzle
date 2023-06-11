/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Container } from "react-bootstrap";
import image from "../../image/short-logo.png";
const Footer = () => {
  return (
    <div className="footerbg mt-5">
      {/* icon */}
      <div className="d-flex mx-auto justify-content-center mt-5">
        <a href="https://www.facebook.com/deshcareer">
          <FontAwesomeIcon className="footericon" icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/channel/UCQB33GJ0C3pL3IpxpVFQS2Q">
          <FontAwesomeIcon className="footericon" icon={faYoutube} />
        </a>
        <a href="https://www.linkedin.com/company/deshcareer/">
          <FontAwesomeIcon className="footericon" icon={faLinkedinIn} />
        </a>
      </div>

      <Container className="mx-auto">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={4} xs={12} sm={12} xl={3}>
            <div className="row">
              <img src={image} alt="footerimage" className="footerimg" />
              <p style={{ textAlign: "left" }} className="footerparagraph">
                Desh Career is Career based newsletter in Bengali language. This
                newsletter has published weekly. This is published in every
                Saturday at 12.00 PM.
              </p>
            </div>
          </Col>
          <Col md={4} xs={6} sm={6}>
            <h4>Privacy and Policy</h4>
            <li className="footerlist mt-1">Privacy Policy</li>
            <li className="footerlist mt-1">Terms Condition</li>
            <li className="footerlist mt-1">FAQ</li>
          </Col>
          <Col md={4} xs={6} sm={6}>
            <h4 className="footerlist1">Support</h4>
            <li className="footerlist2 mt-2">Affilate Link</li>
            <li className="footerlist2 mt-2">Contact us</li>
            <li className="footerlist2 mt-2">Advertise with us</li>
          </Col>
        </Row>
      </Container>
      <hr className="footethr" />
      <div>
        <Container>
          <Row className="d-flex justify-content-between mx-auto">
            <Col md={6} sm={6} xs={6} lg={5}>
              <div>
                <p className="footerp">
                  © 2023 Newsletter E-mail Service: All Copy right reserved
                </p>
              </div>
            </Col>

            <Col md={6} sm={6} xs={6} lg={2}>
              <div className="d-flex divideritem gap-3">
                <a>
                  <li>Terms</li>
                </a>
                <a>
                  <li>Cookie Policy </li>
                </a>
                <a>
                  <li> Privacy</li>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
