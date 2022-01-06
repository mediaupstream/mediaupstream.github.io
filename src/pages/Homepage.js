import React from "react";
import styled from "styled-components";

import { Image, Flex, Box, Link as L, Heading as H, Text as T } from "rebass";
import s1 from "../sketch/rotate";
import s2 from "../sketch/bubbles";
import s3 from "../sketch/lines";

const sketch = [s1, s2, s3];
const randomSketch = sketch => Math.floor(Math.random() * sketch.length) || 0;
const sketchList = ["expand", "bubbles", "lines"];

const theme = {
  primary: "#c04b6a",
  secondary: "#e7e8ea",
  text: "#76818E",
  bg: "#fff"
};

const social = [
  {
    name: "instagram",
    url: "https://www.instagram.com/am.id.a/"
  },
  {
    name: "github",
    url: "https://github.com/mediaupstream"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/derekanderson523/"
  }
];

const projects = [
  {
    name: "Emoji Encoder",
    url: "/emoji-encode"
  },
  {
    name: "Lines",
    url: "/sandbox/lines"
  },
  {
    name: "Love Growth Cash",
    url: "/love-growth-cash"
  },
  {
    name: "Color Box",
    url: "/color-box"
  },
  {
    name: "Game Grid",
    url: "http://northern.lights.mn/projects/game-grid-working/"
  },
  {
    name: "Cube Draw",
    url: "/sandbox/cube-draw/"
  },
  {
    name: "Paint Spread",
    url: "/sandbox/paint-spread"
  },
  {
    name: "Tic Tac Toe",
    url: "/ttt-react-animated"
  }
];

const Section = props => (
  <Box px={[4, 4, 5]} py={[3, 4]} mx={[-4, -4, -5]} my={0} {...props} />
);

const SocialLinks = props => (
  <Section>
    <Text textAlign="center" fontSize={2}>
      {social.map(item => (
        <Link
          key={item.name}
          href={item.url}
          mx={3}
          my={1}
          color="#fff"
          target="_blank"
        >
          {item.name}
        </Link>
      ))}
    </Text>
  </Section>
);

const Divider = styled(Box).attrs({
  as: "hr",
  my: 3
})`
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 16px;
  border-top: 8px dotted rgb(197, 169, 191);
  height: 2px;
  opacity: 0.3;
`;

const Link = styled(p => <L color="#CF4D6F" {...p} />)`
  border: none;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  display: inline-block;
  &:hover {
    color: #000;
    transform: scale(1.1) skewX(0deg);
  }
`;
const Text = props => <T fontWeight={300} color={theme.text} {...props} />;
const Heading = props => (
  <H color={theme.primary} fontWeight={400} {...props} />
);

const Content = styled(Box)`
  transform-style: preserve-3d;
  z-index: 100;

  position: relative;
  background: #cf4d6f;
  padding-bottom: 0;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.4);

  & > * {
    z-index: 200;
    transform: translateZ(1px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: repeating-radial-gradient(
      circle at 100%,
      #333,
      #333 10px,
      #eee 0,
      #eee 20px
    );
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
  }
`;

const Background = styled(Box)`
  z-index: 100;
  background: ${p => `url(${p.bgImage})`};
  background-size: cover;
`;

const Homepage = () => {
  const bg = Math.round(Math.random() * 8) || 1;
  const bgImage = `/img/bg/${bg}.jpeg`;

  return (
    <Flex flexWrap="wrap" style={{ height: "100vh" }}>
      <Background width={[1, 1, 4 / 9]} {...{ bgImage }} py={7} />
      <Content px={[4, 4, 5]} width={[1, 1, 5 / 9]}>
        <Section bg="#fff" py={["2rem", "5rem"]}>
          <Flex alignItems="top" flexDirection={["column", "row"]}>
            <Box pr="3.5rem">
              <img
                src="/img/profile.jpg"
                style={{ width: 100, borderRadius: 600, marginBottom: "2rem" }}
              />
            </Box>
            <Box>
              <Heading fontSize={5}>Hi, I'm Derek.</Heading>
              <Text py={2} fontSize={4}>
                I create interfaces, applications, and art on the web
              </Text>
              <Text py={2} fontSize={2} lineHeight={1.2}>
                For over a decade my work has contributed to the success of
                companies of varing size; everything from seed startups to
                fortune 50 companies.
              </Text>
              <Text py={2} fontSize={2} lineHeight={1.2}>
                When i'm not working you can find me creating digital art,
                hiking, traveling, and spending time with my family
              </Text>

              <Divider />
              <Text fontWeight={200} mb={2} fontSize={4}>
                Current:
              </Text>
              <Text color={theme.primary} fontSize={4} mb={5}>
                Media Upstream
              </Text>
            </Box>
          </Flex>
        </Section>

        <Section bg={theme.secondary}>
          <Text fontWeight={200} fontSize={4} mb={2}>
            Previous:
          </Text>
          <Flex flexWrap="wrap">
            {[
              "Drinkworks",
              "Target",
              "Frontend Masters",
              "Invisible Friend",
              "Jingit",
              "Voice Hive"
            ].map(item => (
              <Box
                key={item}
                width={[1 / 2, 1 / 2, 1 / 3]}
                py={2}
                color="#666"
                children={item}
              />
            ))}
            <Box width={[1 / 2, 1 / 2, 1 / 3]} py={2}>
              <Link
                href="https://www.linkedin.com/in/derekanderson523"
                target="_blank"
                children="more..."
              />
            </Box>
          </Flex>
        </Section>

        <Section bg={theme.primary}>
          <Text
            fontWeight={200}
            fontSize={4}
            mb={2}
            color="#fff"
            children="Experiments:"
          />
          <Flex flexWrap="wrap">
            {projects.map(item => (
              <Box key={item.url} width={[1 / 2, 1 / 2, 1 / 3]}>
                <Link
                  target="_blank"
                  href={item.url}
                  py={2}
                  color="#fff"
                  style={{ display: "block" }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Flex>
        </Section>

        <SocialLinks />
      </Content>
    </Flex>
  );
};

export default Homepage;
