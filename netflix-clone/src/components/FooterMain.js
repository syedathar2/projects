import React from "react";
import { Container, Row, Column, Link, Title, Text, Break } from "./Footer";

function FooterMain({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FooterMain.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

FooterMain.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

FooterMain.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

FooterMain.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FooterMain.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

FooterMain.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

export default FooterMain;
