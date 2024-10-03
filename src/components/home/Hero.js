import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Heading, Image, Text, Button, Input, InputGroup, InputRightElement, InputLeftElement, } from '@chakra-ui/react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

import heroBG from '../../assets/hero-bg.png';

import heroImg1 from '../../assets/hero-img-1.png';
import heroImg2 from '../../assets/hero-img-2.png';
import heroImg3 from '../../assets/hero-img-3.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Hero = () => {
  const windowWidth = useWindowWidth();

  const [instagramHandle, setInstagramHandle] = useState("");
  const [instagramHandleError, setInstagramHandleError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseOutside, setIsMouseOutside] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setMousePosition({ x, y });
      setIsMouseOutside(false);
    };

    const handleMouseLeave = () => {
      setIsMouseOutside(true);
    };

    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
  const containerHeight = containerRef.current ? containerRef.current.offsetHeight : 0;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  const imageRect = imageRef.current ? imageRef.current.getBoundingClientRect() : { left: 0, right: 0 };

  const imageCenterX = (imageRect.left + imageRect.right) / 2;
  const imageCenterY = (imageRect.top + imageRect.bottom) / 2;

  const deltaX = mousePosition.x - imageCenterX;
  const deltaY = mousePosition.y - imageCenterY;

  const rotationStrength = 20;
  let rotateX = 0;
  let rotateY = 0;

  if (isMouseOutside) {
    rotateX = 0;
    rotateY = 0;
  } else {
    if (deltaX < 0 && deltaY < 0) {
      rotateX = Math.abs(deltaY / centerY) * rotationStrength;
      rotateY = -Math.abs(deltaX / centerX) * rotationStrength;
    } else if (deltaX > 0 && deltaY < 0) {
      rotateX = Math.abs(deltaY / centerY) * rotationStrength;
      rotateY = Math.abs(deltaX / centerX) * rotationStrength;
    } else if (deltaX > 0 && deltaY > 0) {
      rotateX = -Math.abs(deltaY / centerY) * rotationStrength;
      rotateY = Math.abs(deltaX / centerX) * rotationStrength;
    } else if (deltaX < 0 && deltaY > 0) {
      rotateX = -Math.abs(deltaY / centerY) * rotationStrength;
      rotateY = -Math.abs(deltaX / centerX) * rotationStrength;
    }
  }

  console.log(windowWidth)

  return (
    <Flex
      height="100dvh"
      minH={{ base: "auto", lg: "600px" }}
      justifyContent="start"
      alignItems={{ base: "center", lg: "center" }}
      position="relative"
      overflow="hidden"
      backgroundImage={`url(${heroBG})`}
      backgroundPosition={{ base: "top right", lg: "center" }}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      ref={containerRef}
      p="100px 20px 30px"
    >
      <Flex position="relative" gap="40px" justifyContent={{ base: "center", lg: "start" }} alignItems="center" flexDirection={{ base: "column-reverse", lg: "row" }} maxW="1290px" w="100%" m="0 auto" textAlign="left" >
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              animate={inView ? 'animate' : 'initial'}
              variants={fadeInUp}
              initial="initial"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Box maxW="578px" mt={{ base: "0", lg: "0" }}>
                <Heading as="h1" letterSpacing="-2px" textAlign={{ base: "center", lg: "start" }} fontWeight="800" fontSize={{ base: "40px", md: "66px" }} mb={{ base: "12px", lg: "20px" }} lineHeight="120%">
                  more than just <br /> a link, it's your <br /> <Text color="grays.white">home on the web</Text>
                </Heading>
                <Flex flexDirection={{ base: "column-reverse", lg: "column" }} alignItems="start" gap={{ base: "20px", lg: "40px" }}>
                  <Text fontSize={20} fontWeight="400" textAlign={{ base: "center", lg: "start" }} lineHeight="160%" color="grays.dark" >
                    hoo.be empowers creators to turn every link into an opportunity
                  </Text>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 2.93913 0.42143 1.92172 1.17157 1.17157C1.92172 0.42143 2.93913 0 4 0H16C17.0609 0 18.0783 0.42143 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.42143 18.0783 0 17.0609 0 16V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4ZM10 7C9.2044 7 8.4413 7.31607 7.87868 7.87868C7.31607 8.4413 7 9.2044 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.4413 12.6839 9.2044 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.2044 12.6839 8.4413 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM5 10C5 8.6739 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.6739 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.6739 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.6739 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10ZM15.5 6C15.8978 6 16.2794 5.84196 16.5607 5.56066C16.842 5.27936 17 4.89782 17 4.5C17 4.10218 16.842 3.72064 16.5607 3.43934C16.2794 3.15804 15.8978 3 15.5 3C15.1022 3 14.7206 3.15804 14.4393 3.43934C14.158 3.72064 14 4.10218 14 4.5C14 4.89782 14.158 5.27936 14.4393 5.56066C14.7206 5.84196 15.1022 6 15.5 6Z" fill="black" />
                        </svg>
                      }
                      h={{ base: "56px", lg: "68px" }}
                      w="20px"
                      ml={{ base: "14px", lg: "18px" }}
                    />
                    <Input
                      isInvalid={instagramHandleError}
                      errorBorderColor='crimson'
                      onChange={(e) => setInstagramHandle(e.target.value)}
                      maxWidth="600px"
                      borderRadius="16px"
                      h={{ base: "56px", lg: "68px" }}
                      p={{ base: "14px 100px 14px 38px", lg: "14px 212px 14px 48px" }}
                      backgroundColor="white" placeholder={windowWidth > 991 ? "@instagram handle" : "@IG handle"}
                      color="black.reg"
                      _placeholder={{ color: 'grays.cloudy' }}
                      fontSize={16}
                      lineHeight={6}
                    />
                    <InputRightElement height="auto" width="auto" m={2} >
                      <Button
                        onClick={() => {
                          instagramHandle === "" ? setInstagramHandleError(true) : window.open(`/join?handle=${instagramHandle}`)
                        }}
                        h={{ base: "42px", lg: "52px" }}
                        bg="black"
                        borderRadius="10px"
                        fontSize={16}
                        lineHeight="24px"
                        p={{ base: "6px 10px", lg: "14px 16px" }}
                        color="grays.white"
                        _hover={{ bg: "#222429" }}
                      >
                        {windowWidth > 991 ? "create your hoo.be" : "create"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Flex>
              </Box>
            </motion.div>
          )}
        </InView>

        <Box
          ref={imageRef}
          zIndex="20"
          transformOrigin="center center"
          position={{ base: "relative", lg: "absolute" }}
          maxWidth={{ base: "350px", lg: "740px" }}
          top={{ base: "auto", lg: "50%" }}
          right={{ base: "auto", lg: "-50px" }}
          willChange="transform"
          transform={`perspective(5000px) translate3d(${windowWidth > 991 ? "0, -50%" : "0, 0"}, 0px) scale3d(1, 1, 1) rotateX(${rotateX > 15 ? 15 : rotateX < -15 ? -15 : rotateX}deg) rotateY(${rotateY > 15 ? 15 : rotateY < -15 ? -15 : rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`}
          transformStyle="preserve-3d"
          transition="transform 0.3s ease-out"
          sx={{
            '@media (max-height: 800px)': {
              maxWidth: '200px',
              w: "200px"
            },
            '@media (max-height: 700px)': {
              display: 'none',
            },
            '@media (min-width: 991px) and (max-width: 1250px)': {
              maxWidth: '400px',
              right: '0',
            },
          }}

        >
          <Image
            src={heroImg1}
            alt="hero1"
            transformStyle="preserve-3d"
            transform="rotateX(10deg) rotateY(0) rotate(0)"
          />
        </Box>
        <Box
          zIndex="20"
          w={{ base: "calc(100% - 40px)", lg: "100%" }}
          sx={{
            '@media (max-height: 800px)': {
              w: '200px',
            },
            '@media (max-height: 700px)': {
              display: 'none',
            },
            '@media (min-width: 991px) and (max-width: 1250px)': {
              maxWidth: '400px',
              right: '0',
            },
          }}
          transformOrigin="center center"
          position="absolute"
          maxWidth={{ base: "350px", lg: "740px" }}
          top={{ base: "0", lg: "50%" }}
          right={{ base: "50%", lg: "-50px" }}
          willChange="transform"
          transform={`perspective(5000px) translate3d(${windowWidth > 991 ? "0, -50%" : "50%, 0"}, 0px) scale3d(1, 1, 1) rotateX(${rotateX > 15 ? 15 : rotateX < -15 ? -15 : rotateX * 0.5}deg) rotateY(${rotateY > 15 ? 15 : rotateY < -15 ? -15 : rotateY * 0.5}deg) rotateZ(0deg) skew(0deg, 0deg)`}
          transformStyle="preserve-3d"
          transition="transform 0.3s ease-out"
        >
          <Image
            src={heroImg2}
            alt="hero2"
            transformStyle="preserve-3d"
            transform="rotateX(10deg) rotateY(0) rotate(0)"
          />
        </Box>
        <Box
          zIndex="20"
          transformOrigin="center center"
          position="absolute"
          maxWidth={{ base: "350px", lg: "740px" }}
          top={{ base: "0", lg: "50%" }}
          right={{ base: "50%", lg: "-50px" }}
          w={{ base: "calc(100% - 40px)", lg: "100%" }}
          sx={{
            '@media (max-height: 800px)': {
              w: '200px',
            },
            '@media (max-height: 700px)': {
              display: 'none',
            },
            '@media (min-width: 991px) and (max-width: 1250px)': {
              maxWidth: '400px',
              right: '0',
            },
          }}
          willChange="transform"
          transform={`perspective(5000px) translate3d(${windowWidth > 991 ? "0, -50%" : "50%, 0"}, 0px) scale3d(1, 1, 1) rotateX(${rotateX > 15 ? 15 : rotateX < -15 ? -15 : rotateX}deg) rotateY(${rotateY > 15 ? 15 : rotateY < -15 ? -15 : rotateY}deg) rotateZ(0deg) skew(0deg, 0deg)`}
          transformStyle="preserve-3d"
          transition="transform 0.3s ease-out"
        >
          <Image
            src={heroImg3}
            alt="hero3"
            transformStyle="preserve-3d"
            transform="rotateX(10deg) rotateY(0) rotate(0)"
          />
        </Box>
      </Flex>
    </Flex >
  );
};

export default Hero;