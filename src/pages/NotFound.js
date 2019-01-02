import React from "react";
import { Flex, Box, Text } from "rebass";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackBtn = styled(Text).attrs({
  href: "/",
  bg: "#777",
  color: "#fff",
  px: 3,
  py: 2,
  children: "back"
})`
  text-decoration: none;
  transition: all 0.24s linear;
  border: 0px solid pink;
  transform: scale(1);
  &:hover {
    background-color: #333;
    transform: scale(1.4);
    border: 40px solid pink;
  }
`;

const BackLink = props => (
  <Text my={4}>
    <Link to="/" style={{ textDecoration: "none" }}>
      <BackBtn />
    </Link>
  </Text>
);

const NotFound = () => (
  <Flex bg="#f3f1eb" style={{ width: "100vw", height: "100vh" }}>
    <Box m="auto">
      <Text>it</Text>
      <Text>may</Text>
      <Text>be</Text>
      <Text>that</Text>
      <Text>you</Text>
      <Text>are</Text>
      <Text>lost</Text>
      <BackLink />
    </Box>
  </Flex>
);

export default NotFound;
