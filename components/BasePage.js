import React from "react";
import { Container, Row, Col } from "reactstrap";

const BasePage = props => {
    const className = props.className || '';
  return (
    <div>
      <Container className="base-page">{props.children}</Container>
    </div>
  );
};

export default BasePage;
