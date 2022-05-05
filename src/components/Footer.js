import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Styles.css";
import Logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import group from "../assets/group.svg";
import whatsapp from "../assets/whatsapp.svg";

const Footer = () => {
  return (
    <Container>
      <Row className="footer">
        <Col sm={5} className="footer_c">
          <div>
            <img src={Logo} style={{ position: "relative", right: 40 }} />
          </div>

          <div style={{ display: "flex", gap: 15 }}>
            <img src={facebook} />
            <img src={twitter} />
            <img src={group} />
            <img src={whatsapp} />
          </div>

          <div style={{ color: "rgba(0, 0, 0, 0.44)", fontSize: 12.5 }}>
            San Francisco, California 94104-5401 US
          </div>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">PRODUCT</text>
          <Link to={"lemappextension"} className="footer-textItem">
            Lemapp Extension
          </Link>
          <text className="footer-textItem">Lemapp Workspace</text>
          <text className="footer-textItem">Roadmap</text>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">LEARNING</text>
          <Link to={"support"} className="footer-textItem">
            Support
          </Link>
          <Link to={"impact"} className="footer-textItem">
            Lemapp Impact
          </Link>
          <Link to={"blog"} className="footer-textItem">
            Blog
          </Link>
        </Col>

        <Col sm className="footer_c">
          <text className="footer-textHeader">COMPANY</text>
          <text className="footer-textItem">Contact Us</text>
          <Link to={"termsandconditions"} className="footer-textItem">
            Terms and Conditions
          </Link>
          <Link to={"privacypolicy"} className="footer-textItem">
            Privacy Policy
          </Link>
          <text className="footer-textItem">Carrers</text>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
