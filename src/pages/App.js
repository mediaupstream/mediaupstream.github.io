import React, { useState } from "react";
import {
  Hero,
  Heading,
  Columns,
  Section,
  Container,
  Button
} from "react-bulma-components";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const style = {
  row: {
    background: "#a1c49c"
  },
  block: {
    background: "#58395d"
  },
  c: {
    color: "#58395d",
    fontWeight: "bold",
    fontFfamily: "-apple-system, BlinkMacSystemFont, sans-serif",
    textTransform: "uppercase",
    fontSize: "5rem",
    textAlign: "right",
    padding: "1rem",
    background: "#a1c49c",
    display: "inline-block"
  },
  flip: {
    background: "#58395d",
    color: "#a1c49c"
  }
};

const Row = Columns;
const Col = Columns.Column;

const AppTitle = props => {
  return (
    <Row gapless>
      <Col size={6}>
        <Heading size={1} css={style.c}>
          Media Upstream
        </Heading>
      </Col>
      <Col size={6}>
        <Heading size={1} css={[style.c, style.flip]}>
          ART
        </Heading>
      </Col>
    </Row>
  );
};

const App = () => {
  return (
    <div>
      <AppTitle />
    </div>
  );
};

export default App;
