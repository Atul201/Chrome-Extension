import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Styles.css";
import quarter1 from "../assets/pricingquarter1.svg";
import quarter2 from "../assets/pricingquarter2.svg";
import bullet from "../assets/bullet.svg";

const Pricing = () => {
  return (
    <div>
      <div>
        <div
          style={{
            textAlign: "center",
            background: "rgba(20, 20, 20, 1)",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            paddingBlock: 50,
          }}
        >
          <div
            className="d-none d-lg-block"
            style={{ position: "absolute", left: 0 }}
          >
            <img src={quarter1} style={{ position: "relative", bottom: 50 }} />
          </div>

          <div
            className="d-none d-lg-block"
            style={{ position: "absolute", right: 0 }}
          >
            <img src={quarter2} style={{ position: "relative", top: 150 }} />
          </div>
          <Col
            lg={4}
            style={{ gap: 20, display: "flex", flexDirection: "column" }}
          >
            <h1 style={{ color: "white" }}>Lemapp Tailored to Your Need</h1>
            <p style={{ color: "white" }}>
              All types of businesses serve different types of customers, so we
              give you options to meet your unique needs.
            </p>

            <div>
              <Button
                variant="dark"
                style={{
                  background: "rgba(255, 204, 0, 0.12)",
                  borderRadius: 25,
                  paddingInline: 25,
                  marginBottom: 30,
                }}
              >
                Lorem Ipsum
              </Button>
            </div>

            <div
              style={{
                gap: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="warning"
                style={{ borderRadius: 25, paddingInline: 25 }}
              >
                Anually
              </Button>
              <Button
                variant="dark"
                style={{ borderRadius: 25, paddingInline: 25 }}
              >
                Monthly
              </Button>
            </div>
          </Col>
        </div>
        <div class="rounded-css"></div>
      </div>

      <div style={{ background: "white", paddingBlock: 50 }}>
        <Container
          style={{ gap: 100, display: "flex", flexDirection: "column" }}
        >
          <Row style={{ justifyContent: "center", gap: 50 }}>
            <Col
              style={{
                background: "rgba(26, 28, 41, 1)",
                borderRadius: 35,
                width: "100%",
                maxWidth: 350,
                paddingBlock: 25,
                boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Container>
                <div style={{ display: "flex", gap: 20 }}>
                  <div
                    style={{
                      background: "rgba(255, 204, 0, 1)",
                      borderRadius: 15,
                      width: 65,
                      height: 65,
                    }}
                  />
                  <h3 style={{ color: "white" }}>Lemapp Workspace</h3>
                </div>
                <text style={{ color: "rgba(255, 255, 255, 0.44)" }}>
                  Contact us for pricing details
                </text>
              </Container>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "rgba(255, 255, 255, 0.1)",
                  marginBlock: 15,
                }}
              />
              <Container>
                <ul
                  style={{ gap: 10, display: "flex", flexDirection: "column" }}
                >
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Lemapp Extension
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Lemapp Workspace
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Integrates with Salesforce Hubspot, and pripedrive
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Premium Support
                  </li>
                </ul>
              </Container>

              <Container>
                <Button variant="warning" style={{ width: "100%" }}>
                  Contact Us
                </Button>
              </Container>
            </Col>

            <Col
              style={{
                background: "rgba(26, 28, 41, 1)",
                borderRadius: 35,
                width: "100%",
                maxWidth: 350,
                paddingBlock: 25,
                boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Container>
                <div style={{ display: "flex", gap: 20 }}>
                  <div
                    style={{
                      background: "rgba(255, 204, 0, 1)",
                      borderRadius: 15,
                      width: 65,
                      height: 65,
                    }}
                  />
                  <h3 style={{ color: "white" }}>Lemapp Personal</h3>
                </div>
                <text style={{ color: "rgba(255, 255, 255, 0.44)" }}>
                  $3.99/mo
                </text>
              </Container>

              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "rgba(255, 255, 255, 0.1)",
                  marginBlock: 15,
                }}
              />
              <Container>
                <ul
                  style={{ gap: 10, display: "flex", flexDirection: "column" }}
                >
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Unlimited access to Lemapp extension
                  </li>
                  <li
                    style={{
                      color: "white",
                      listStyleImage: `url(${bullet} ) `,
                    }}
                  >
                    Premium Support
                  </li>
                </ul>
              </Container>

              <Container style={{ marginTop: 80 }}>
                <Button variant="warning" style={{ width: "100%" }}>
                  Try it for free
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
