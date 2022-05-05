import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import faq from "../assets/faq.svg";
import requestAFeature from "../assets/request-a-feature.svg";
import recentUpdates from "../assets/recent-updates.svg";
import followCooby from "../assets/follow-cooby.svg";

const Support = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          background: "rgba(196, 196, 196, 0.09)",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingBottom: 50,
        }}
      >
        <h1>We’re Here to Help.</h1>

        <Col lg={6}>
          <p>
            We always want to hear from you! Let us know how we can best help
            you and we'll do our very best.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="light"
              style={{
                paddingInline: 25,
                background: "white",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              MESSAGE US
              <br />
              Start a chat!
            </Button>

            <Button
              variant="light"
              style={{
                border: "1px solid rgba(255, 204, 0, 1)",
                paddingInline: 25,
                background: "white",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              CALL ANYTIME
              <br />
              +1 (415) 969 - 9946
            </Button>

            <Button
              variant="light"
              style={{
                paddingInline: 25,
                background: "white",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              EMAIL US
              <br />
              support@lemapp.co
            </Button>
          </div>
        </Col>
      </div>

      <div style={{ background: "white", paddingBlock: 50 }}>
        <Container
          style={{ gap: 100, display: "flex", flexDirection: "column" }}
        >
          <Row style={{ justifyContent: "space-between" }}>
            <Col
              lg={5}
              style={{
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>Frequently Asked Questions</h1>
              <p>
                Let us answer your questions regarding Lemapp and all our
                products!
              </p>
              <Button variant="warning" style={{ width: 250 }}>
                View FAQ
              </Button>
            </Col>
            <Col lg={5}>
              <img src={faq} style={{ width: "100%" }} />
            </Col>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={5}>
              <img src={requestAFeature} style={{ width: "100%" }} />
            </Col>
            <Col
              lg={5}
              style={{
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>Request a Feature</h1>
              <p>
                Have an idea for a new feature you wish to see included in an
                upcoming Lemapp update? Visit our roadmap and submit your
                feature request!
              </p>
              <Button variant="warning" style={{ width: 250 }}>
                See Roadmap
              </Button>
            </Col>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Col
              lg={5}
              style={{
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>Recent Updates</h1>
              <p>
                We’re constantly improving Lemapp. See the latest features and
                improvements.
              </p>
              <Button variant="warning" style={{ width: 250 }}>
                View Recent Updates
              </Button>
            </Col>
            <Col lg={5}>
              <img src={recentUpdates} style={{ width: "100%" }} />
            </Col>
          </Row>

          <Row style={{ justifyContent: "space-between" }}>
            <Col lg={5}>
              <img src={followCooby} style={{ width: "100%" }} />
            </Col>
            <Col
              lg={5}
              style={{
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>Follow Lemapp</h1>
              <p>
                Follow us on Twitter to receive updates on latest news about
                Lemapp!
              </p>
              <Button variant="warning" style={{ width: 250 }}>
                Follow
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Support;
