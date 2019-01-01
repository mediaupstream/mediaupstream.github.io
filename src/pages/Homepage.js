import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Flex,
  Box,
  Card,
  Link as L,
  mage,
  Heading as H,
  Text as T
} from "rebass";
import P5Wrapper from "react-p5-wrapper";
// import sketch from '../sketch/rotate'
import sketch from "../sketch/bubbles";

const social = [
  {
    name: "instagram",
    url: "https://www.instagram.com/a.mi.no/"
  },
  {
    name: "github",
    url: "https://github.com/mediaupstream"
  },
  {
    name: "twitter",
    url: "https://twitter.com/derekanderson"
  },
  {
    name: "email",
    url: "mailto:derek@mediaupstream.com"
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
    name: "Lines",
    url: "/sandbox/lines"
  },
  {
    name: "Cube Draw",
    url: "/sandbox/cube-draw/"
  },
  {
    name: "Tic Tac Toe",
    url: "/ttt-react-animated"
  },
  {
    name: "Dead Drop",
    url: "http://dead-drop.io"
  },
  {
    name: "React Timber",
    url: "https://github.com/mediaupstream/react-timber"
  }
];

const Section = props => (
  <Box
    px={[4, 4, 5]}
    py={[3, 4]}
    mx={[-4, -4, -5]}
    my={0}
    bg="#CF4D6F"
    {...props}
  />
);

const SocialLinks = props => (
  <Section bg="#76818E">
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
  bg: "#c5a9bf",
  my: 3
})`
  border: 0;
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
    transform: scale(1.1) skewX(-8deg);
  }
`;
const Text = props => (
  <T textAlign={["center", "left"]} color="#76818E" {...props} />
);
const Heading = props => (
  <H
    color="#76818E"
    textAlign={["center", "left"]}
    fontWeight={400}
    {...props}
  />
);
const Content = props => (
  <Box
    p={[4, 4, 5]}
    style={{ paddingBottom: 0, zIndex: 100 }}
    bg="#fff"
    {...props}
  />
);

const Homepage = () => {
  return (
    <Flex flexWrap="wrap">
      <P5Wrapper sketch={sketch} rotation={45} />

      <Content width={[1, 1, 1 / 2]} ml={[0, "50vw"]}>
        {/* <SocialLinks /> */}

        <Heading fontSize={5}>Hi, I'm Derek.</Heading>

        <Text py={2} fontSize={4}>
          I create interfaces, applications, and art on the web.
        </Text>

        <Divider />

        <Text py={2} fontSize={3}>
          I like open source, art, traveling, education, diversity, pacifism,
          and organic avocados.
        </Text>

        <Text py={2} fontSize={3}>
          Sometimes I teach creative coding, give tech talks, and volunteer at
          local art & tech events.
        </Text>

        {/* <Divider /> */}

        <Section bg="#fff">
          <Text fontWeight={200} mb={2} fontSize={4}>
            Currently:
          </Text>
          <Text color="#A36D90" fontSize={4}>
            Sr Engineer @ Target.com
          </Text>
        </Section>

        <Section bg="#e7e8ea">
          <Text fontWeight={200} fontSize={4} mb={2}>
            Previous:
          </Text>
          <Text fontSize={3} mb={2}>
            FrontendMasters, Jingit, Invisible Friend, VoiceHive, Vitro, Creed
            Interactive, &nbsp;
            <Link
              href="https://www.linkedin.com/in/derekanderson523"
              target="_blank"
            >
              {" "}
              more...{" "}
            </Link>
          </Text>
        </Section>

        {/* <Section style={{background:'linear-gradient(0deg, #CF4D6F 0%, #A36D90 100%)'}}> */}
        <Section bg="#A36D90">
          <Text fontWeight={200} fontSize={4} mb={2} color="#fff">
            Projects:
          </Text>
          <Flex flexWrap="wrap">
            {projects.map(item => (
              <Box key={item.url} width={1 / 3}>
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
