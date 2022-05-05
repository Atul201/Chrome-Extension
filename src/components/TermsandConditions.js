import React from "react";
import { Container } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          paddingBottom: 50,
          background: "rgba(196, 196, 196, 0.09)",
        }}
      >
        <h1>Terms and Conditions</h1>
        Last updated: 13 April 2022
      </div>

      <div style={{ background: "white", paddingBlock: 50 }}>
        <Container>
          <div style={{ marginBottom: 50 }}>
            <p>
              Please read these Terms and Conditions (“Terms”, “Terms and
              Conditions”) carefully before using the{" "}
              <a href="https://pearllemon.com/">https://lemapp.com/</a> website
              operated by Pearl Lemon LTD (“us”, “we”, or “our”).
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users and others who access or use the Service.
            </p>
            <p style={{ fontWeight: "bold" }}>
              By accessing or using the Service you agree to be bound by these
              Terms. If you disagree with any part of the terms then you may not
              access the Service.
            </p>
            <p style={{ fontWeight: "bold" }}>Links To Other Web Sites</p>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by Pearl Lemon ltd Pearl Lemon
              ltd has no control over, and assumes no responsibility for, the
              content, privacy policies, or practices of any third party web
              sites or services. You further acknowledge and agree that Pearl
              Lemon ltd shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with use of or reliance on any such content,
              goods or services available on or through any such web sites or
              services.
            </p>
          </div>
          <div style={{ marginBottom: 50 }}>
            <h1>Contact Us</h1>
            <br />
            If you have any questions about these Terms, please contact us.
            <br />
            Pearl Lemon ltd
            <br />
            team@pearllemon.com
            <br />
            Kemp House, 152 – 160 City Road
            <br />
            EC1V 2NX
            <br />
            London
            <br />
            United Kingdom
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TermsAndConditions;
