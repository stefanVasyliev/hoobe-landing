import React from 'react';
import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import charlyImage from '../../assets/creators/charly.png';
import charlyImageScreen from '../../assets/creators/charly-screen.png';
import dudesignImage from '../../assets/creators/dude-sign.png';
import dudesignImageScreen from '../../assets/creators/dude-sign-screen.png';
import harryImage from '../../assets/creators/harry.png';
import harryImageScreen from '../../assets/creators/harry-screen.png';
import michaelImage from '../../assets/creators/michael.png';
import michaelImageScreen from '../../assets/creators/michael-screen.png';
import pitbullImage from '../../assets/creators/pitbull.png';
import pitbullImageScreen from '../../assets/creators/pitbull-screen.png';
import sommerImage from '../../assets/creators/sommer.png';
import sommerImageScreen from '../../assets/creators/sommer-screen.png';
import tombradyImage from '../../assets/creators/tom-brady.png';
import tombradyImageScreen from '../../assets/creators/tom-brady-screen.png';
import { InView } from 'react-intersection-observer';
import useWindowWidth from '../../hooks/useWindowWidth';

const creators = [
    { name: 'Charly Jordan', role: 'dj', followers: '4.4M', image: charlyImage, screen: charlyImageScreen, link: '/charlyjordan' },
    { name: 'dude with sign', role: 'blogger', followers: '7.9M', image: dudesignImage, screen: dudesignImageScreen, link: '/dudewithsign' },
    { name: 'Harry Jowsey', role: 'gamer', followers: '4.2M', image: harryImage, screen: harryImageScreen, link: '/harryjowsey' },
    { name: 'Michael Evans Behling', role: 'artist', followers: '1.6M', image: michaelImage, screen: michaelImageScreen, link: '/michaelb05' },
    { name: 'Pitbull', role: 'artist', followers: '10.8M', image: pitbullImage, screen: pitbullImageScreen, link: '/pitbull' },
    { name: 'Sommer Ray', role: 'model', followers: '24.9M', image: sommerImage, screen: sommerImageScreen, link: '/sommer' },
    { name: 'Tom Brady', role: 'athlete', followers: '15M', image: tombradyImage, screen: tombradyImageScreen, link: '/tombrady' },
];

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

const Trusted = () => {
    const windowWidth = useWindowWidth();

    return (
        <Box
            position="relative"
            maxW="1290px"
            p={{ base: "0 0 0 20px", md: "0 20px" }}
            h={{ base: "auto", md: "580px" }}
            textAlign="center"
            width="100%"
            m="0 auto"
            mt={{ base: "100px", md: "140px" }}
            mb={{ base: "100px", md: "0" }}
        >
            <Heading as="h2" pr={{ base: "20px", md: "0" }} textAlign="center" mb={30} fontSize={{ base: "36px", md: "48px" }} lineHeight="124%" letterSpacing="-0.7px" fontWeight="700">
                trusted by top creators
            </Heading>

            <InView triggerOnce>
                {({ inView, ref }) => (
                    windowWidth > 1290 ?
                        <Flex justifyContent="center" gap="33px" ref={ref}>
                            {creators.map((creator, index) => (
                                <motion.div
                                    ref={ref}
                                    animate={inView ? 'animate' : 'initial'}
                                    variants={fadeInUp}
                                    initial="initial"
                                    exit="exit"
                                    transition={{ duration: 0.3, delay: index * 0.3 }}
                                >
                                    <Link href={creator.link} isExternal key={index} role="group" display="block" h="100%" alignItems="space-between" _hover={{ w: "235px" }} w={150} transition="0.5s all">
                                        <Flex flexDirection="column" alignItems="center" overflow="hidden">
                                            <Image src={creator.image} alt={creator.name} objectFit="cover" w="100%" h="184px" _groupHover={{ h: '0' }} transition="0.5s all" borderRadius="16px" />
                                            <Box
                                                as="span"
                                                fontSize={16}
                                                lineHeight="24px"
                                                fontWeight="600"
                                                color="black.reg"
                                                mt="14px"
                                                _groupHover={{ display: "none" }}
                                            >{creator.name}</Box>
                                            <Box
                                                as="span"
                                                fontSize={14}
                                                lineHeight="18px"
                                                fontWeight="400"
                                                color="grays.medium"
                                                _groupHover={{ display: "none" }}
                                            >
                                                {creator.role}
                                            </Box>
                                            <Flex
                                                color="grays.medium"
                                                fontSize={14}
                                                lineHeight="20px"
                                                fontWeight="500"
                                                mt="12px"
                                                alignItems="center"
                                                _groupHover={{ display: "none" }}
                                                gap="6px"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 2.93913 0.42143 1.92172 1.17157 1.17157C1.92172 0.42143 2.93913 0 4 0H16C17.0609 0 18.0783 0.42143 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.42143 18.0783 0 17.0609 0 16V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4ZM10 7C9.2044 7 8.4413 7.31607 7.87868 7.87868C7.31607 8.4413 7 9.2044 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.4413 12.6839 9.2044 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.2044 12.6839 8.4413 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM5 10C5 8.6739 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.6739 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.6739 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.6739 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10ZM15.5 6C15.8978 6 16.2794 5.84196 16.5607 5.56066C16.842 5.27936 17 4.89782 17 4.5C17 4.10218 16.842 3.72064 16.5607 3.43934C16.2794 3.15804 15.8978 3 15.5 3C15.1022 3 14.7206 3.15804 14.4393 3.43934C14.158 3.72064 14 4.10218 14 4.5C14 4.89782 14.158 5.27936 14.4393 5.56066C14.7206 5.84196 15.1022 6 15.5 6Z" fill="#70757D" />
                                                </svg>
                                                {creator.followers}
                                            </Flex>
                                        </Flex>
                                        <Flex flexDirection="column" overflow="hidden" >
                                            <Image src={creator.screen} alt={creator.name} objectFit="cover" w="100%" h="0" _groupHover={{ h: '392px' }} transition="0.5s all" borderRadius="16px" />
                                            <Flex
                                                mt="12px"
                                                justifyContent="center"
                                                fontSize={14}
                                                lineHeight="18px"
                                                fontWeight="400"
                                                color="black.reg"
                                                _groupHover={{ display: "block" }}
                                                display="none"
                                            >
                                                <Box as="span" color="grays.medium">hoo.be/</Box>{creator.link.replace('/', '')}
                                            </Flex>
                                        </Flex>
                                    </Link>
                                </motion.div>
                            ))}
                        </Flex> :
                        <motion.div
                            ref={ref}
                            animate={inView ? 'animate' : 'initial'}
                            variants={fadeInUp}
                            initial="initial"
                            exit="exit"
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <Swiper
                                ref={ref}
                                spaceBetween={30}
                                loop={true}
                                slidesPerView={2.5}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2.5
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                    },
                                    1200: {
                                        slidesPerView: 7,
                                    },
                                }}
                            >
                                {creators.map((creator, index) => (
                                    <SwiperSlide key={creator.name}>

                                        <Link display="flex" href={creator.link} isExternal flexDirection="column" alignItems="center" overflow="hidden" >
                                            <Image src={creator.image} alt={creator.name} objectFit="cover" transition="0.5s all" borderRadius="16px" />
                                            <Box
                                                as="span"
                                                fontSize={16}
                                                lineHeight="24px"
                                                fontWeight="600"
                                                color="black.reg"
                                                mt="14px"
                                            >{creator.name}</Box>
                                            <Box
                                                as="span"
                                                fontSize={14}
                                                lineHeight="18px"
                                                fontWeight="400"
                                                color="grays.medium"
                                            >
                                                {creator.role}
                                            </Box>
                                            <Flex
                                                color="grays.medium"
                                                fontSize={14}
                                                lineHeight="20px"
                                                fontWeight="500"
                                                mt="12px"
                                                alignItems="center"
                                                gap="6px"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 2.93913 0.42143 1.92172 1.17157 1.17157C1.92172 0.42143 2.93913 0 4 0H16C17.0609 0 18.0783 0.42143 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.42143 18.0783 0 17.0609 0 16V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4ZM10 7C9.2044 7 8.4413 7.31607 7.87868 7.87868C7.31607 8.4413 7 9.2044 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.4413 12.6839 9.2044 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.2044 12.6839 8.4413 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM5 10C5 8.6739 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.6739 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.6739 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.6739 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10ZM15.5 6C15.8978 6 16.2794 5.84196 16.5607 5.56066C16.842 5.27936 17 4.89782 17 4.5C17 4.10218 16.842 3.72064 16.5607 3.43934C16.2794 3.15804 15.8978 3 15.5 3C15.1022 3 14.7206 3.15804 14.4393 3.43934C14.158 3.72064 14 4.10218 14 4.5C14 4.89782 14.158 5.27936 14.4393 5.56066C14.7206 5.84196 15.1022 6 15.5 6Z" fill="#70757D" />
                                                </svg>
                                                {creator.followers}
                                            </Flex>
                                        </Link>

                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                )}
            </InView>
        </Box >
    );
};

export default Trusted;
