import React from "react";
import FooterMain from "./FooterMain";

function FooterFinal() {
  return (
    <FooterMain>
      <FooterMain.Title>Questions? Call 1-123-123-1234</FooterMain.Title>
      <FooterMain.Break />
      <FooterMain.Row>
        <FooterMain.Column>
          <FooterMain.Link href="#">FAQ</FooterMain.Link>
          <FooterMain.Link href="#">Investor Relations</FooterMain.Link>
          <FooterMain.Link href="#">Ways to Watch</FooterMain.Link>
          <FooterMain.Link href="#">Corporate Information</FooterMain.Link>
          <FooterMain.Link href="#">Netflix Originals</FooterMain.Link>
        </FooterMain.Column>

        <FooterMain.Column>
          <FooterMain.Link href="#">Help Center</FooterMain.Link>
          <FooterMain.Link href="#">Jobs</FooterMain.Link>
          <FooterMain.Link href="#">Terms of Use</FooterMain.Link>
          <FooterMain.Link href="#">Contact Us</FooterMain.Link>
        </FooterMain.Column>

        <FooterMain.Column>
          <FooterMain.Link href="#">Account</FooterMain.Link>
          <FooterMain.Link href="#">Redeem gift cards</FooterMain.Link>
          <FooterMain.Link href="#">Privacy</FooterMain.Link>
          <FooterMain.Link href="#">Speed Test</FooterMain.Link>
        </FooterMain.Column>

        <FooterMain.Column>
          <FooterMain.Link href="#">Media Center</FooterMain.Link>
          <FooterMain.Link href="#">Buy gift cards</FooterMain.Link>
          <FooterMain.Link href="#">Cookie Preferences</FooterMain.Link>
          <FooterMain.Link href="#">Legal Notices</FooterMain.Link>
        </FooterMain.Column>
      </FooterMain.Row>
      <FooterMain.Break />
      <FooterMain.Text>Netflix United States</FooterMain.Text>
    </FooterMain>
  );
}

export default FooterFinal;
