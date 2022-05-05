import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import extension1 from "../assets/extension1.svg";
import extension2 from "../assets/extension2.svg";
import extension3 from "../assets/extension3.svg";
import extension4 from "../assets/extension4.svg";
import extension5 from "../assets/extension5.svg";
import extension6 from "../assets/extension6.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import impactellipse1 from "../assets/impactellipse1.svg";
import impactellipse2 from "../assets/impactellipse2.svg";
import logo_upmesh from "../assets/logo_upmesh.svg";
import logo_sequoia from "../assets/logo_sequoia.svg";
import logo_reubird from "../assets/logo_reubird.svg";
import logo_mandala from "../assets/logo_mandala.svg";
import logo_facebook from "../assets/logo_facebook.svg";
import logo_digit from "../assets/logo_digit.svg";

const LemappExtension = () => {
  return (
    <div style={{ background: "white" }}>
      <Container fluid style={{ marginBottom: 100 }}>
        <Row>
          <div>
            <img
              src={impactellipse1}
              style={{
                position: "absolute",
                left: 0,
                maxWidth: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={impactellipse2}
              style={{
                position: "absolute",
                right: 0,
                maxWidth: "100%",
              }}
            />
          </div>
          <Col style={{ justifyContent: "center", display: "flex" }}>
            <Col
              lg={8}
              style={{ gap: 20, display: "flex", flexDirection: "column" }}
            >
              <Col lg={9}>
                <h1>
                  Bring Your{" "}
                  <span
                    style={{
                      background: "rgba(255, 204, 0, 1)",
                      color: "white",
                    }}
                  >
                    Customer Communication
                  </span>{" "}
                  to order on Whatsapp & Telegram
                </h1>
              </Col>
              <p>
                Lose track of your work chats in Whatsapp & Telegram inbox? Try
                Lemapp Extension. Prioritize chats. Reduce clutter. Never miss a
                follow-up.
              </p>
              <div>
                <Button variant="warning">Add to Chrome</Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 20,
                }}
              >
                <img src={logo_upmesh} />
                <img src={logo_sequoia} />
                <img src={logo_reubird} />
                <img src={logo_mandala} />
                <img src={logo_facebook} />
                <img src={logo_digit} />
              </div>
            </Col>
          </Col>

          <Col>
            <img src={extension1} style={{ width: "100%" }} />
          </Col>
        </Row>
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
        <Col lg={5}>
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
        fluid
        style={{ display: "flex", flexDirection: "column", marginBottom: 100 }}
      >
        <Container>
          <h6 style={{ fontSize: 20 }}>#Extension</h6>
        </Container>

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
                style={{ gap: 40, display: "flex", flexDirection: "column" }}
              >
                <h2>Your Whatsapp & Telegram Inbox Is Going Out of Control</h2>
                <p>
                  Customers, colleagues, vendors, plus friends and family all
                  clutter your Whatsapp & Telegram inbox. You need to keep
                  things in order on Whatsapp & Telegram as you scale your
                  business.
                </p>
              </Col>
            </Col>
          </Col>

          <Col lg={5}>
            <img src={extension2} style={{ width: "100%" }} />
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            <img src={extension3} style={{ width: "100%" }} />
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
                style={{ gap: 40, display: "flex", flexDirection: "column" }}
              >
                <h2>A Better and Faster Way to Manage Customers Than a CRM</h2>
                <p>
                  CRM busywork slows you down. It forces you to spend more time
                  entering data into another system.
                </p>
                <p>
                  Unlike a CRM, Lemapp Extension is built for speed. Zero setup
                  time. Build your own communication workflows in 30 seconds.
                </p>
              </Col>
            </Col>
          </Col>
        </Row>

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
                <h2>Supercharge Your Whatsapp & Telegram for Work</h2>
                <p>
                  Whatsapp & Telegram is built for personal use. Yet, your
                  business relies on it. Mute, Pin, etc aren't enough for you.
                </p>
                <p>
                  We combine everything from tabs, search, and sales processes
                  in one simple and intuitive workspace—right within Whatsapp &
                  Telegram.
                </p>
              </Col>
            </Col>
          </Col>

          <Col lg={5}>
            <img src={extension2} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>

      <div
        style={{
          background: "rgba(20, 20, 20, 1)",
          paddingTop: 50,
          marginBottom: 100,
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}
        >
          <h1 style={{ color: "white" }}>
            <span
              style={{ background: "rgba(255, 204, 0, 1)", color: "black" }}
            >
              Take Control
            </span>{" "}
            of your Whatsapp & Telegram Chats
          </h1>
          <Col
            lg={8}
            style={{
              textAlign: "center",
            }}
          >
            <p style={{ color: "white", marginBottom: 40 }}>
              It's easy to lose track of conversations. Use Unread, Awaiting
              Reply, Needs Reply tabs to find a chat thread much faster and
              never miss a message again!
            </p>
            <img src={extension4} style={{ width: "100%" }} />
          </Col>
        </Container>
      </div>

      <Container style={{ marginBottom: 100 }}>
        <Row style={{ gap: 100, justifyContent: "center" }}>
          <Col lg={5}>
            <img src={extension5} width="100%" />
          </Col>

          <Col
            lg={5}
            style={{ gap: 20, display: "flex", flexDirection: "column" }}
          >
            <h2>
              We Design and Build With{" "}
              <span
                style={{ background: "rgba(255, 204, 0, 1)", color: "black" }}
              >
                Privacy at Heart
              </span>
            </h2>
            <p>
              Your privacy is of paramount importance to us. We will NEVER sell
              your data or keep it hostage. We do not store your conversation
              data by default. Think of Lemapp Extension as a UI layer on top of
              Whatsapp & Telegram.
            </p>
            <div>
              <Button variant="warning">Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LemappExtension;
