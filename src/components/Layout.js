import React, { Fragment } from "react";
import Routes from "../Routes";
import { Link } from "react-router-dom";
import { Flex, Box, Card, Image, Heading, Text } from "rebass";

const Layout = () => {
  return (
    <Fragment>
      <Flex>
        <Box p={3} width={1 / 2} color="white" bg="magenta">
          <Heading>Media Upstream</Heading>
        </Box>
        <Box p={3} width={1 / 2} color="magenta" bg="#eee">
          <Link to="/">Home</Link> :<Link to="/about">About</Link> :
          <Link to="/work">Work</Link>
        </Box>
      </Flex>
      <Flex>
        <Box p={3} width={1} color="#333" bg="#aaa">
          <Routes />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Layout;
