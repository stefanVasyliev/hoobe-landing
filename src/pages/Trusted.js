import React from 'react';
import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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

const creators = [
    { name: 'Charly Jordan', role: 'dj', followers: '4.4M', image: charlyImage, screen: charlyImageScreen, link: '/charlyjordan' },
    { name: 'dude with sign', role: 'blogger', followers: '7.9M', image: dudesignImage, screen: dudesignImageScreen, link: '/dudewithsign' },
    { name: 'Harry Jowsey', role: 'gamer', followers: '4.2M', image: harryImage, screen: harryImageScreen, link: '/harryjowsey' },
    { name: 'Michael Evans Behling', role: 'artist', followers: '1.6M', image: michaelImage, screen: michaelImageScreen, link: '/michaelb05' },
    { name: 'Pitbull', role: 'artist', followers: '10.8M', image: pitbullImage, screen: pitbullImageScreen, link: '/pitbull' },
    { name: 'Sommer Ray', role: 'model', followers: '24.9M', image: sommerImage, screen: sommerImageScreen, link: '/sommer' },
    { name: 'Tom Brady', role: 'athlete', followers: '15M', image: tombradyImage, screen: tombradyImageScreen, link: '/tombrady' },
];

const MotionBox = motion(Box);

const Trusted = () => {
    return (
        <Box overflow="hidden" m="140px 0 200px">
            <Heading as="h2" textAlign="center" mb={30} fontSize={24} lineHeight="124%" letterSpacing="-0.7px" fontWeight="700">
                trusted by top creators
            </Heading>
            <Flex wrap="wrap" justifyContent="center" gap="30px">
                {creators.map((creator, index) => (
                    <Link href={creator.link} isExternal key={index}>
                        <MotionBox
                            position="relative"
                            width="340px"
                            height="480px"
                            cursor="pointer"
                            perspective="600px"
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6 }}
                        >
                            <MotionBox
                                className="front"
                                position="absolute"
                                width="100%"
                                height="100%"
                                overflow="hidden"
                                backfaceVisibility="hidden"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <Image src={creator.image} alt={creator.name} width="100%" height="100%" objectFit="cover" />
                            </MotionBox>

                            <MotionBox
                                className="back"
                                position="absolute"
                                width="100%"
                                height="100%"
                                overflow="hidden"
                                backfaceVisibility="hidden"
                                backgroundColor="#f1f1f1"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                flexDirection="column"
                                style={{ transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }}
                            >
                                <Image src={creator.screen} alt={creator.name} width="100%" height="100%" objectFit="cover" />
                            </MotionBox>
                        </MotionBox>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};

export default Trusted;
