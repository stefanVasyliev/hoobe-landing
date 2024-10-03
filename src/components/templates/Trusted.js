import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Image, Link } from '@chakra-ui/react';
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

const MotionBox = motion(Box);

const creators = [
    { name: 'Charly Jordan', role: 'dj', followers: '4.4M', image: charlyImage, screen: charlyImageScreen, link: '/charlyjordan' },
    { name: 'dude with sign', role: 'blogger', followers: '7.9M', image: dudesignImage, screen: dudesignImageScreen, link: '/dudewithsign' },
    { name: 'Harry Jowsey', role: 'gamer', followers: '4.2M', image: harryImage, screen: harryImageScreen, link: '/harryjowsey' },
    { name: 'Michael Evans Behling', role: 'artist', followers: '1.6M', image: michaelImage, screen: michaelImageScreen, link: '/michaelb05' },
    { name: 'Pitbull', role: 'artist', followers: '10.8M', image: pitbullImage, screen: pitbullImageScreen, link: '/pitbull' },
    { name: 'Sommer Ray', role: 'model', followers: '24.9M', image: sommerImage, screen: sommerImageScreen, link: '/sommer' },
    { name: 'Tom Brady', role: 'athlete', followers: '15M', image: tombradyImage, screen: tombradyImageScreen, link: '/tombrady' },
];


const Trusted = () => {
    const [width, setWidth] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const calculateWidth = () => {
            const cardWidth = 180;
            const margin = 16;
            return creators.length * (cardWidth + margin);
        };

        setWidth(calculateWidth());
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };




    return (
        <Box overflow="hidden" m="140px 0 200px">
            <Heading as="h2" textAlign="center" mb={30} fontSize={24} lineHeight="124%" letterSpacing="-0.7px" fontWeight="700">trusted by top creators</Heading>
            <MotionBox
                display="flex"
                alignContent="center"
                style={{ width: `${width * 2}px` }}
            >
                {creators.map((creator, index) => (
                    <Box key={`${creator.name}-${index}`} mr={4}>
                        <Link href={creator.link} isExternal _hover={{ textDecoration: 'none' }}>
                            <MotionBox
                                width="160px"
                                height="200px"
                                overflow="hidden"
                                position="relative"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                padding="10px"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ perspective: '1000px' }}
                            >
                                {/* Front Side */}
                                <Box
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    backfaceVisibility="hidden"
                                    transform={hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'}
                                    transition="transform 0.6s"
                                    zIndex={hoveredIndex === index ? 0 : 1} // Ensure front side is on top when not hovered
                                >
                                    <Image
                                        src={creator.image}
                                        alt={creator.name}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                    <Box position="absolute" bottom="10px" left="10px" color="white">
                                        <Text fontWeight="bold">{creator.name}</Text>
                                        <Text fontSize="sm">{creator.role}</Text>
                                        <Text fontSize="xs">{creator.followers} followers</Text>
                                    </Box>
                                </Box>

                                {/* Back Side */}
                                <Box
                                    position="absolute"
                                    width="100%"
                                    height="100%"
                                    backfaceVisibility="hidden"
                                    transform={hoveredIndex === index ? 'rotateY(360deg)' : 'rotateY(180deg)'}
                                    transition="transform 0.6s"
                                    zIndex={hoveredIndex === index ? 1 : 0} // Ensure back side is on top when hovered
                                >
                                    <Image
                                        src={creator.screen}
                                        alt={`${creator.name} screen`}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                    />
                                    <Box position="absolute" bottom="10px" left="10px" color="white">
                                        <Text fontWeight="bold">{creator.name}</Text>
                                        <Text fontSize="sm">{creator.role}</Text>
                                        <Text fontSize="xs">{creator.followers} followers</Text>
                                    </Box>
                                </Box>
                            </MotionBox>
                        </Link>
                    </Box>
                ))}
            </MotionBox>
        </Box>
    );
};

export default Trusted;