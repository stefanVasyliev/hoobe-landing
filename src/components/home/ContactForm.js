import React, { useState } from "react";
import { Flex, Heading, Text, Button, Input, InputGroup, InputRightElement, InputLeftElement } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/swiper-bundle.css";

import contactFormBg from "../../assets/contact-form-image.png";
import contactFormBgMob from "../../assets/contact-form-image-mob.png";
import Footer from "../Footer";

const ContactForm = ({ fullscreen = false, opacity = 1 }) => {
  const [instagramHandle, setInstagramHandle] = useState("");
  const [instagramHandleError, setInstagramHandleError] = useState(false);
  return (
    <Flex
      w="100%"
      h="100%"
      position="relative"
      flex="1"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      p={fullscreen ? "0" : "0 20px"}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        position="relative"
        width="inherit"
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="inherit"
        p={{ base: `60px 20px ${fullscreen ? "344px" : "120px"}`, md: "60px 20px" }}
        m="0 auto"
        background="linear-gradient(80deg, #28A1AD -7.76%, #6946F8 126.56%)"
        borderRadius={fullscreen ? 0 : "32px"}
        flexDirection="column"
      >
        <motion.div style={{ opacity }}>
          <Flex flexDirection="column" alignItems="center" maxW="650px">
            <Heading
              as="h2"
              mb={{ base: "14px", md: "20px" }}
              fontSize={{ base: "36px", md: "65px" }}
              fontWeight="800"
              color="grays.white"
              lineHeight="110%"
              textAlign="center"
            >
              get started today
            </Heading>
            <Text
              fontSize={{ base: "24px", md: "26px" }}
              fontWeight="500"
              color="grays.white"
              mb="40px"
              textAlign="center"
              lineHeight="140%"
            >
              join the community of top creators at hoo.be and launch your own hub today
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 4C0 2.93913 0.42143 1.92172 1.17157 1.17157C1.92172 0.42143 2.93913 0 4 0H16C17.0609 0 18.0783 0.42143 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.42143 18.0783 0 17.0609 0 16V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4ZM10 7C9.2044 7 8.4413 7.31607 7.87868 7.87868C7.31607 8.4413 7 9.2044 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.4413 12.6839 9.2044 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.2044 12.6839 8.4413 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM5 10C5 8.6739 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.6739 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.6739 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.6739 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10ZM15.5 6C15.8978 6 16.2794 5.84196 16.5607 5.56066C16.842 5.27936 17 4.89782 17 4.5C17 4.10218 16.842 3.72064 16.5607 3.43934C16.2794 3.15804 15.8978 3 15.5 3C15.1022 3 14.7206 3.15804 14.4393 3.43934C14.158 3.72064 14 4.10218 14 4.5C14 4.89782 14.158 5.27936 14.4393 5.56066C14.7206 5.84196 15.1022 6 15.5 6Z"
                      fill="black"
                    />
                  </svg>
                }
                h={{ base: "56px", md: "68px" }}
                w="20px"
                ml="18px"
              />
              <Input
                isInvalid={instagramHandleError}
                errorBorderColor='crimson'
                borderRadius="16px"
                h={{ base: "56px", md: "68px" }}
                p={{ base: "14px 16px 14px 48px", md: "14px 212px 14px 48px" }}
                backgroundColor="rgba(255, 255, 255, 0.70)"
                placeholder="instagram handle"
                color="black.reg"
                _placeholder={{ color: "black.reg" }}
                fontSize={16}
                lineHeight={6}
                onChange={(e) => setInstagramHandle(e.target.value)}
              />
              <InputRightElement
                height="auto"
                width="auto"
                m={{ base: 0, md: 2 }}
                top={{ base: "64px", md: "0" }}
                w={{ base: "100%", md: "auto" }}
              >
                <Button
                  h="52px"
                  bg="black"
                  borderRadius="10px"
                  fontSize={16}
                  lineHeight="24px"
                  p="14px 16px"
                  color="grays.white"
                  w={{ base: "100%", md: "100%" }}
                  onClick={() => {
                    instagramHandle === "" ? setInstagramHandleError(true) : window.open(`/join?handle=${instagramHandle}`)
                  }}
                >
                  create your hoo.be
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </motion.div>
      </Flex>
      {fullscreen && (
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background: "#fff",
            marginTop: "auto",
            opacity: opacity,
          }}
        >
          <Footer small={true} />
        </motion.div>
      )}
    </Flex>
  );
};

export default ContactForm;
