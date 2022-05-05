import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";

const Blog = () => {
  const Item = ({ item }) => {
    return (
      <Col lg={5} style={{ gap: 10, display: "flex", flexDirection: "column" }}>
        <img src={item.image} style={{ width: "100%" }} />
        <br />
        <text>JUN 2021</text>
        <h3>
          Frustrated with Trying to Tame a Gazillion Whatsapp & Telegram Chats?
        </h3>
        <p>
          Working in sales is challenging, no doubt. But it's also very
          rewarding. Excelling in sales requires relationship building — a
          fundamental human skill. In business, of course, the decision-makers
          we encounter are human, so trust matters when someone is deciding
          whether or not to buy your product.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 25,
          }}
        >
          <Button
            variant="light"
            style={{
              border: "1px solid rgba(255, 204, 0, 1)",
              paddingInline: 25,
            }}
          >
            Read More
          </Button>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <img
              src={item.avatar}
              style={{ width: 56, height: 56, borderRadius: 56 }}
            />
            <text>WEN | CO-FOUNDER & CEO</text>
          </div>
        </div>
      </Col>
    );
  };
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
        }}
      >
        <h1>Lemapp Blog</h1>

        <Col lg={6}>
          <p>
            We share everything about messaging, productivity tools,
            entrepreneurship, etc.
          </p>

          <img src={blog1} style={{ width: "100%" }} />
        </Col>
      </div>

      <div style={{ background: "white", paddingBlock: 50 }}>
        <Container>
          <h1 style={{ marginBottom: 50 }}>Latest Articles</h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 50,
              justifyContent: "space-between",
            }}
          >
            {[
              { image: blog2, avatar: blog4 },
              { image: blog3, avatar: blog5 },
            ].map((item, ind) => {
              return <Item key={ind} item={item} />;
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
