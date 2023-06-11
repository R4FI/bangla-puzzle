import React from "react";
import "./Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
const Body = () => {
  return (
    <div className="bodypart justify-content-center">
      <Container className="mt-5">
        <div style={{ textAlign: "left" }}>
          <h1
            style={{ fontWeight: "bolder", fontSize: "50px" }}
            className="w-50 bodytxt"
          >
            Get Smarter about your career
          </h1>
          <p>
            Get the <span>5-minute newsletter </span>keeping about smart career
          </p>
        </div>
        <div class="input-container">
          <div class="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="text"
            class="email-input"
            placeholder="Your E-mail address"
          />
          <button class="button">Join Now</button>
        </div>

        <p className="w-50 mx-auto bodytxt2">
          We're committed to your privacy. DashCareer uses the information you
          provide to contact you about our relevant content and services. You
          may unsubscribe from these communications at any time. For more
          information, check out our Privacy Policy.
        </p>
      </Container>
    </div>
  );
};

export default Body;
