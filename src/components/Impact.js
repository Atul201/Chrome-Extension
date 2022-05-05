import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import impact1 from "../assets/impact1.svg";
import impactellipse1 from "../assets/impactellipse1.svg";
import impactellipse2 from "../assets/impactellipse2.svg";
import impact2 from "../assets/impact2.svg";
import impact3 from "../assets/impact3.svg";
import impact4 from "../assets/impact4.svg";

const Impact = () => {
  return (
    <div style={{ background: "white" }}>
      <Container fluid style={{ marginBottom: 100 }}>
        <Row>
          <div>
            <img
              src={impactellipse1}
              style={{ position: "absolute", left: 0 }}
            />
          </div>
          <div>
            <img
              src={impactellipse2}
              style={{ position: "absolute", right: 0 }}
            />
          </div>
          <Col style={{ justifyContent: "center", display: "flex" }}>
            <Col
              lg={8}
              style={{ gap: 20, display: "flex", flexDirection: "column" }}
            >
              <h1>
                <span style={{ background: "rgba(255, 204, 0, 1)" }}>
                  Track your sales teams
                </span>{" "}
                and key customers on Whatsapp & Telegram
              </h1>
              <p>
                Gain insights into what's happening in Whatsapp & Telegram with
                Conversational Intelligence from Lemapp. Stop nagging your sales
                and customer success teams.
              </p>
              <div>
                <Button variant="warning">Get Started</Button>
              </div>
            </Col>
          </Col>

          <Col>
            <img src={impact1} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          textAlign: "center",
          gap: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 100,
        }}
      >
        <h1>
          <span style={{ background: "rgba(255, 204, 0, 1)" }}>
            Deals are getting out of control
          </span>{" "}
          as your sales use Whatsapp & Telegram to communicate with customers
        </h1>

        <p>
          Whatsapp & Telegram triumphs over emails in reaching customers, but
          sales teams using multiple Whatsapp & Telegram accounts create
          communication silos and disconnect from internal systems.
        </p>
        <p>
          Problems? Managers struggle to track key customers. Companies lose
          deals. Customers receive responses late. Individuals feel disempowered
          to sell on Whatsapp & Telegram.
        </p>
        <Col lg={8}>
          <img src={impact2} style={{ width: "100%" }} />
        </Col>

        <img src={impactellipse1} style={{ position: "absolute", left: 0 }} />
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        <Col
          lg={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>
            Know what's going on with your key customers on Whatsapp & Telegram
          </h1>
          <Col lg={8}>
            <img src={impact3} style={{ width: "100%" }} />
          </Col>

          <p>
            Track sales activities, ensure customers are taken care of, and
            learn insights from Whatsapp & Telegram conversations.
          </p>
          <p>
            Stay on top of your competition with keyword tracking and topic
            analysis.
          </p>
        </Col>

        <img src={impactellipse2} style={{ position: "absolute", right: 0 }} />
      </Container>

      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        <Col
          lg={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Train your next sales rep by showcasing your wins</h1>
          <Col lg={8}>
            <img src={impact4} style={{ width: "100%" }} />
          </Col>

          <p>
            Build a library of insightful customer conversations to capture the
            tribal knowledge seamlessly. This makes onboarding new members much
            easier and more consistently.
          </p>
        </Col>
      </Container>
    </div>
  );
};

export default Impact;
