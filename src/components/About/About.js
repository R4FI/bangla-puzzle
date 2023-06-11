import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div>
      <Container className="mx-auto mt-5">
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontWeight: "bolder", fontSize: "50px" }}>About Us</h1>
          <p
            style={{
              width: "450px",
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.
          </p>
          <p
            style={{
              width: "450px",
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            We focus on Career trend, news, smart job etc.
          </p>
          <p
            style={{
              width: "450px",
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
            }}
          >
            If you want to contact us: you can send an email to
            contact.deshcareer@gmail.com
          </p>
          <p>
            If you want to meet with us, you can come to our office based on an
            appointment.
          </p>

          <address
            style={{
              width: "450px",
              fontFamily: "sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "40px",
            }}
          >
            Our Office address:
            <br />
            House: 13/3, <br />
            Road: 2, Shyamoly, <br />
            Dhaka-1207 <br />
            +8801880811047
          </address>
        </div>
      </Container>
    </div>
  );
};

export default About;
