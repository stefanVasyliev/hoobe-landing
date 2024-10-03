import React, { useRef, useState } from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import "swiper/css";
import "swiper/swiper-bundle.css";
import useWindowWidth from "./../../hooks/useWindowWidth";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
const buttons = [
  {
    text: "bloggers",
    bg: "linear-gradient(90deg, #00838F 0%, #11A643 100%)",
  },
  {
    text: "musicians",
    bg: "linear-gradient(90deg, #1DA83E 0%, #A3C013 100%)",
  },
  {
    text: "streamers",
    bg: "linear-gradient(90deg, #A3C013 0%, #F2A100 100%)",
  },
  {
    text: "athletes",
    bg: "linear-gradient(90deg, #F2A100 0%, #FF4D4D 100%)",
  },
  {
    text: "entrepreneurs",
    bg: "linear-gradient(90deg, #FF4D4D 0%, #F249F2 100%)",
  },
  {
    text: "artists",
    bg: "linear-gradient(90deg, #F249F2 0%, #8149F2 100%)",
  },
  {
    text: "actors",
    bg: "linear-gradient(90deg, #8149F2 0%, #6669D7 100%)",
  },
  {
    text: "you",
    bg: "linear-gradient(80deg, #28A1AD -7.76%, #6946F8 126.56%)",
  },
];
const Creators = () => {
  const [stop, setStop] = useState(false);

  const creatorsRef = useRef(null);
  const screenWidth = useWindowWidth();

  const { scrollYProgress } = useScroll({ target: creatorsRef });

  const screenMiddle = screenWidth / 2;
  const badgesMiddle = 1750 - screenMiddle;

  const y = useTransform(scrollYProgress, [0, 0.3], [screenMiddle, -badgesMiddle]);
  const scale = useTransform(scrollYProgress, [0.3, 2], [1, 100]);
  const chipOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const formOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const inputsOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  useMotionValueEvent(y, "change", (latest) => {
    if (parseInt(latest) <= -badgesMiddle) {
      setStop(true);
    } else {
      setStop(false);
    }
  });

  return (
    <>
      <Flex
        position="relative"
        m="0 auto"
        textAlign="center"
        width="100%"
        p="0 20px"
        ref={creatorsRef}
        flexDirection="column"
        alignItems="center"
        h="350vh"
        pt={{ base: "200px", md: "300px" }}
        pb="472px"
      >
        <motion.div
          style={{
            maxWidth: "100vw",
            overflow: "hidden",
          }}
          whileInView={{
            paddingBottom: "350px",
            top: "250px",
            position: "sticky",
          }}
        >
          <Heading
            as="h2"
            textAlign="center"
            fontSize={{ base: "36px", md: "48px" }}
            lineHeight="124%"
            letterSpacing="-1.5px"
            fontWeight="800"
            maxW={{ base: "360px", md: "480px" }}
            color="grays.dark"
            margin="auto"
            mb="140px"
            p="0 20px"
          >
            hoo.be is home for all creators
          </Heading>
          <motion.div style={{ x: y }}>
            <Flex transition="transform 0.3s ease" gap="32px" alignItems="center" bottom="300px">
              {buttons.map((button, index) => {
                if (index === buttons.length - 1) {
                  return (
                    <motion.div
                      style={{
                        position: stop ? "sticky" : "static",
                        scaleX: scale,
                        scaleY: scale,
                        zIndex: stop && 1001,
                        opacity: chipOpacity,
                      }}
                    >
                      <Box
                        p="32px 48px"
                        fontSize="24px"
                        lineHeight="28px"
                        fontWeight="600"
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius="64px"
                        background={button.bg}
                      >
                        <Text>{button.text}</Text>
                      </Box>
                    </motion.div>
                  );
                } else
                  return (
                    <Box
                      p="32px 48px"
                      fontSize="24px"
                      lineHeight="28px"
                      fontWeight="600"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="64px"
                      background={button.bg}
                    >
                      <Text>{button.text}</Text>
                    </Box>
                  );
              })}
            </Flex>
          </motion.div>
        </motion.div>
      </Flex>
      {stop && (
        <motion.div
          style={{
            width: "100vw",
            position: "fixed",
            top: 0,
            height: "100vh",
            zIndex: 1001,
            opacity: formOpacity,
          }}
        >
          <ContactForm opacity={inputsOpacity} fullscreen></ContactForm>
        </motion.div>
      )}
    </>
  );
};

export default Creators;
