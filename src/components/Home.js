import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import home1 from "../assets/home1.svg";
import home2 from "../assets/home2.svg";
import home3 from "../assets/home3.svg";
import error from "../assets/error.svg";
import homelogo1 from "../assets/homelogo1.svg";
import homelogo2 from "../assets/homelogo2.svg";
import whatsapp1 from "../assets/whatsapp1.svg";
import gun from "../assets/gun.svg";
import extension6 from "../assets/extension6.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import impactellipse1 from "../assets/impactellipse1.svg";
import impactellipse2 from "../assets/impactellipse2.svg";
const Home = () => {
  return (
    <div style={{ background: "white" }}>
      <Container
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: 30,
          marginBottom: 100,
        }}
      >
        <div className="d-none d-md-block">
          <img
            src={impactellipse1}
            style={{
              position: "absolute",
              left: 0,
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="d-none d-md-block">
          <img
            src={impactellipse2}
            style={{
              position: "absolute",
              right: 0,
              maxWidth: "100%",
            }}
          />
        </div>
        <Col
          lg={8}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <h1>
            <img src={whatsapp1} /> Making Whatsapp & Telegram Your Strongest{" "}
            <span
              style={{ background: "rgba(255, 204, 0, 1)", color: "white" }}
            >
              Sales Weapon
            </span>
            <img src={gun} />
          </h1>

          <p>
            Bring visibility into customer conversations from your teams'
            regular Whatsapp & Telegram numbers with analytics, customer
            tracking and intelligence. Modernize your Whatsapp & Telegram inbox
            with tabs, notes, reminders, social profile, calendar integration,
            etc.
          </p>

          <div
            style={{
              background: "white",
              boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
              borderRadius: 5,
              padding: 5,
              width: "100%",
              maxWidth: 410,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input
              placeholder="Enter your email address"
              style={{ border: "none" }}
            />
            <Button>Kill it Now!</Button>
          </div>

          <img src={home1} width="100%" />

          <text style={{ fontWeight: "bold" }}>
            Our 11,000+ Loyal{" "}
            <span style={{ background: "rgba(255, 204, 0, 1)" }}>
              {" "}
              Coobians{" "}
            </span>
          </text>
        </Col>

        <img src={homelogo1} width="100%" />
      </Container>

      <div
        style={{
          background: "rgba(20, 20, 20, 1)",
          display: "flex",
          flexDirection: "column",
          marginBottom: 100,
          alignItems: "center",
          paddingBlock: 100,
          gap: 50,
        }}
      >
        <Container style={{ marginBottom: 100 }}>
          <Row style={{ gap: 50 }}>
            <Col style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <div>
                <text
                  style={{
                    color: "rgba(255, 204, 0, 1)",
                    background: "rgba(255, 204, 0, 0.06)",
                    paddingBlock: 10,
                    paddingInline: 20,
                  }}
                >
                  The Why
                </text>
              </div>
              <div
                style={{
                  color: "white",
                }}
              >
                <h3>Why Companies Need Lemapp for Whatsapp & Telegram?</h3>

                <p>
                  Lemapp enables you to see what's going on with your sales
                  teams as they sell on Whatsapp & Telegram, and boost their
                  inbox productivity.
                </p>
              </div>
              <div
                style={{
                  background: "rgba(255, 83, 83, 0.08)",
                  color: "white",
                  display: "flex",
                  gap: 10,
                  paddingInline: 15,
                  borderRadius: 7,
                }}
              >
                <img src={error} />
                <p>
                  We don’t support Whatsapp & Telegram API numbers. No
                  auto-messaging. No chatbot. Your sales reps continue using
                  Whatsapp & Telegram app or web.
                </p>
              </div>
            </Col>

            <Col
              style={{
                background: "rgba(255, 204, 0, 1)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 25,
                paddingBlock: 50,
              }}
            >
              <div
                style={{
                  width: 117,
                  height: 117,
                  borderRadius: 117,
                  background: "white",
                }}
              />
              <div
                style={{
                  color: "black",
                  paddingInline: 50,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <h5 style={{ fontWeight: "bold" }}>
                  We Improve Inbox Productivity for everyone
                </h5>
                <p>
                  We modernize your Whatsapp & Telegram with tabs, calendar
                  integration, notes, etc. for the organizational rigors that
                  businesses require.
                </p>
                <div>
                  <Button variant="light">Find Solution for Myself</Button>
                </div>
              </div>
            </Col>

            <Col
              style={{
                background: "white",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingBlock: 50,
                gap: 25,
              }}
            >
              <div
                style={{
                  width: 117,
                  height: 117,
                  borderRadius: 117,
                  background: "rgb(241, 241, 241)",
                }}
              />
              <div
                style={{
                  color: "black",
                  paddingInline: 50,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <h5 style={{ fontWeight: "bold" }}>
                  We Provide Visibility for Companies
                </h5>
                <p>
                  We aggregate customer conversations on your teams’ regular
                  Whatsapp & Telegram numbers in one place and provide
                  analytics, collaboration and data ownership for companies.
                </p>
                <div>
                  <Button variant="warning">
                    Find Solution for Sales Leaders
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Col
            lg={6}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div className="d-none d-lg-block" style={{ position: "absolute" }}>
              <div
                style={{
                  position: "relative",
                  width: 19,
                  height: 19,
                  borderRadius: 19,
                  background: "rgba(255, 77, 77, 1)",
                  right: 100,
                  top: 40,
                }}
              />
            </div>
            <h1>
              Let Lemapp save you from{" "}
              <span
                style={{
                  background: "rgba(255, 204, 0, 1)",
                  color: "black",
                }}
              >
                Whatsapp & Telegram hell
              </span>
            </h1>
            <div className="d-none d-lg-block" style={{ position: "absolute" }}>
              <div
                style={{
                  position: "relative",
                  width: 27,
                  height: 27,
                  borderRadius: 27,
                  background: "rgba(80, 77, 255, 1)",
                  left: window.innerWidth / 2.4,
                  top: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 14,
                  height: 14,
                  borderRadius: 14,
                  background: "rgba(225, 140, 255, 1)",
                  left: window.innerWidth / 2.2,
                  top: 80,
                }}
              />
            </div>
            <div>_</div>
            <p>
              Whether you’re a salesperson or a sales leader, we’ve got the
              tools you’ve been looking for to make life on Whatsapp & Telegram
              easier and more efficient
            </p>
          </Col>
        </Container>

        <Container
          fluid
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 100,
            color: "white",
          }}
        >
          <Row>
            <Col
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col lg={8}>
                <Col
                  lg={9}
                  style={{ gap: 20, display: "flex", flexDirection: "column" }}
                >
                  <h6 style={{ color: "rgba(255, 204, 0, 1)" }}>
                    LEMAPP EXTENSION
                  </h6>
                  <h2>
                    {" "}
                    <span
                      style={{
                        background: "rgba(255, 204, 0, 1)",
                        color: "black",
                      }}
                    >
                      Supercharge
                    </span>{" "}
                    your Whatsapp & Telegram for work
                  </h2>
                  <p>
                    Ditch the CRM and establish communication workflows in
                    seconds within Whatsapp & Telegram, organize your inbox with
                    custom tabs, schedule events in a few clicks, share
                    conversations, and set follow-up reminders.
                  </p>

                  <div style={{ gap: 20, display: "flex" }}>
                    <Button variant="warning">Install free Extension</Button>
                    <Button variant="light">See how it works</Button>
                  </div>
                </Col>
              </Col>
            </Col>

            <Col lg={5}>
              <img src={home2} style={{ width: "100%" }} />
            </Col>
          </Row>

          <Row>
            <Col lg={5}>
              <img src={home3} style={{ width: "100%" }} />
            </Col>
            <Col
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Col lg={8}>
                <Col
                  lg={9}
                  style={{ gap: 20, display: "flex", flexDirection: "column" }}
                >
                  <h6 style={{ color: "rgba(255, 204, 0, 1)" }}>
                    LEMAPP WORKSPACE
                  </h6>
                  <h2>
                    {" "}
                    <span
                      style={{
                        background: "rgba(255, 204, 0, 1)",
                        color: "black",
                      }}
                    >
                      Bring Light
                    </span>{" "}
                    to your sales team’s activities on Whatsapp & Telegram
                  </h2>
                  <p>
                    Gain visibility into your team’s Whatsapp & Telegram sales
                    contacts, customer chat history, and points of interaction
                    so you do not miss out on any valuable insights.
                  </p>

                  <div style={{ gap: 20, display: "flex" }}>
                    <Button variant="warning">Request for demo</Button>
                    <Button variant="light">See how it works</Button>
                  </div>
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>

        <Col lg={5}>
          <div className="d-none d-lg-block" style={{ position: "absolute" }}>
            <div
              style={{
                position: "relative",
                right: 30,
                top: 70,
                fontSize: 40,
              }}
            >
              😀
            </div>
          </div>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Don’t take our word, Look at what our{" "}
            <span
              style={{ background: "rgba(255, 204, 0, 1)", color: "black" }}
            >
              Users
            </span>{" "}
            say
          </h1>
        </Col>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: window.innerWidth < 1140 ? 420 : 310,
              border: "1px solid rgba(255, 204, 0, 1)",
              borderRadius: 12,
              color: "white",
              paddingInline: 25,
              paddingBlock: 15,
              display: "flex",
              flexDirection: "column",
              gap: window.innerWidth < 1140 ? 30 : 15,
              fontSize: window.innerWidth < 1140 ? 12 : 10,
            }}
          >
            <h6 style={{ textAlign: "center" }}>FAMPAY</h6>
            <div>
              <img src={extension6} />
            </div>
            <p>
              "Whatsapp & Telegram has become like an email these days, and it
              becomes so difficult to keep track of important chats when you get
              so many every single day. I literally can’t imagine myself
              responding to chats without Lemapp. It’s so much fun, convenient,
              and productive. Plus the team is very much receptive to feedback
              and user suggestions."
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div>
                <img src={blog4} />
              </div>

              <div style={{ color: "white" }}>
                <text style={{ fontWeight: "bold", fontSize: 13 }}>
                  KUSH TANEJA
                </text>
                <p>
                  Founder at FamPay (YC S19) | Forbes 30 Under 30 | Hiring
                  leaders
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: 420,
              border: "1px solid rgba(255, 204, 0, 1)",
              borderRadius: 12,
              color: "white",
              padding: 25,
              display: "flex",
              flexDirection: "column",
              gap: 30,
              fontSize: 12,
              background:
                window.innerWidth < 1140 ? "none" : "rgba(255, 204, 0, 0.05)",
            }}
          >
            <h6 style={{ textAlign: "center" }}>HUSTLE FUND</h6>
            <div>
              <img src={extension6} />
            </div>
            <p>
              "I've been searching for a solution to manage my out-of-control
              Whatsapp & Telegram inbox. Lemapp instantly brings order by
              allowing me to create lists of priority folks to respond to, and
              muting the group chats that can be incredibly distracting"
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div>
                <img src={blog5} />
              </div>

              <div style={{ color: "white", fontSize: 12 }}>
                <text style={{ fontWeight: "bold", fontSize: 13 }}>
                  SHIYAN KOH
                </text>
                <p>Managing partner at Hustle Fund</p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              maxWidth: window.innerWidth < 1140 ? 420 : 310,
              border: "1px solid rgba(255, 204, 0, 1)",
              borderRadius: 12,
              color: "white",
              padding: 25,
              display: "flex",
              flexDirection: "column",
              gap: window.innerWidth < 1140 ? 30 : 15,
              fontSize: window.innerWidth < 1140 ? 12 : 10,
            }}
          >
            <h6 style={{ textAlign: "center" }}>SEQUIOA</h6>
            <div>
              <img src={extension6} />
            </div>
            <p>
              "Lemapp has changed the way I manage my day in an unbelievable
              way. The convenience, efficiency, and organization it adds is an
              absolute game-changer. I don’t know how I operated before this,
              but I never want to go back"
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div>
                <img src={blog5} />
              </div>

              <div style={{ color: "white", fontSize: 10 }}>
                <text style={{ fontWeight: "bold", fontSize: 13 }}>
                  SURAJ LAUNGANI
                </text>
                <p>AVP - Human Capital SEA at Sequoia Capital</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          marginBottom: 50,
        }}
      >
        <Col lg={4}>
          <h5 style={{ marginBottom: 25 }}>
            Backed by{" "}
            <span style={{ background: "rgba(255, 204, 0, 1)" }}>
              World-Class
            </span>{" "}
            Investors
          </h5>
          <img src={homelogo2} width="100%" />
        </Col>
      </Container>

      <div
        style={{
          background: "rgba(20, 20, 20, 1)",
          paddingBlock: 50,
          marginBottom: 100,
          display: "flex",
          justifyContent: "center",
          paddingInline: 10,
        }}
      >
        <Col
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "white" }}>
            Unsure of which{" "}
            <span
              style={{ background: "rgba(255, 204, 0, 1)", color: "black" }}
            >
              Lemapp product
            </span>{" "}
            is rigth for you?
          </h1>
          <Col
            style={{
              textAlign: "center",
            }}
          >
            <p style={{ color: "white", marginBottom: 40 }}>
              We make sure you get what you need. We would gladly help you asses
              which product would solve your Whatsapp & Telegram problems.
              Consult with us now!
            </p>
            <Button variant="warning">Consult Now</Button>
          </Col>
        </Col>
      </div>
    </div>
  );
};

export default Home;
