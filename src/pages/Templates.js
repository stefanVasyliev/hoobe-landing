import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Heading, Box, Flex, Button, GridItem, Grid, Link, Image } from '@chakra-ui/react';
import ContactForm from "../components/home/ContactForm";
import { motion } from 'framer-motion';

import template1 from '../assets/templates/template-1.png';
import template2 from '../assets/templates/template-2.png';
import template3 from '../assets/templates/template-3.png';
import template4 from '../assets/templates/template-4.png';
import template5 from '../assets/templates/template-5.png';
import template6 from '../assets/templates/template-6.png';
import template7 from '../assets/templates/template-7.png';
import template8 from '../assets/templates/template-8.png';

const templates = [
  { name: 'dixie', followers: '10.8M', image: template1, link: '/dixie', tags: ['new', 'popular'] },
  { name: 'Twan Kuyper', followers: '10.8M', image: template2, link: '/dixie', tags: ['colourful', 'gradient', 'retro'] },
  { name: 'Charly Jordan', followers: '10.8M', image: template8, link: '/dixie', tags: ['retro', 'gradient'] },
  { name: 'Twan Kuyper', followers: '10.8M', image: template5, link: '/dixie', tags: ['new', 'popular', 'retro'] },
  { name: 'dixie', followers: '10.8M', image: template4, link: '/dixie', tags: ['new', 'colourful'] },
  { name: 'Twan Kuyper', followers: '10.8M', image: template5, link: '/dixie', tags: ['colourful', 'popular', 'retro'] },
  { name: 'dixie', followers: '10.8M', image: template4, link: '/dixie', tags: ['new', 'colourful', 'retro'] },
  { name: 'Alix Early', followers: '10.8M', image: template7, link: '/dixie', tags: ['new', 'popular', 'retro'] },
  { name: 'Twan Kuyper', followers: '10.8M', image: template5, link: '/dixie', tags: ['gradient', 'colourful', 'retro'] },
  { name: 'Alix Early', followers: '10.8M', image: template3, link: '/dixie', tags: ['new', 'gradient', 'colourful'] },
  { name: 'Twan Kuyper', followers: '10.8M', image: template5, link: '/dixie', tags: ['retro', 'popular', 'colourful'] },
  { name: 'Alix Early', followers: '10.8M', image: template6, link: '/dixie', tags: ['gradient', 'popular', 'retro'] },
];


function Templates() {
  const [tags, setTags] = useState([]);
  const [actTag, setActTag] = useState('all');
  const [filteredTemplates, setFilteredTemplates] = useState(templates);

  useEffect(() => {
    const allTags = templates.map(template => template.tags);
    const tags = allTags.flat().filter((tag, index) => allTags.flat().indexOf(tag) === index);
    setTags(['all', ...tags]);
  }, []);

  const filterTemplates = (tag) => {
    setFilteredTemplates(tag === "all" ? templates : templates.filter(template => template.tags.includes(tag)));
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <Layout
      page="templates"
      title="Premium Templates for Every Need - Hoobe"
      description="Browse our collection of high-quality templates designed for various purposes. Customize and download to kickstart your projects effortlessly with Hoobe."
      keywords="templates, premium templates, customizable, design templates, resources, Hoobe"
    >
      <Box
        position="relative"
        maxW="1290px"
        px="20px"
        m={{ base: "108px auto 0", md: "154px auto 0" }}
        textAlign="center"
        width="100%"
      >
        <Heading
          as="h1"
          color="grays.dark"
          fontSize={{ base: "36px", md: "65px" }}
          fontWeight="800"
          lineHeight="115%"
          letterSpacing=" -1.95px"
          mb="26px"
          textAlign="center"
        >
          templates
        </Heading>

        <Flex
          gap="4px"
          mb={{ base: "40px", md: "60px" }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {tags.map((tag, index) => (
            <Button
              key={index}
              borderRadius="20px"
              color={actTag === tag ? 'white' : 'black'}
              bg={actTag === tag ? 'black' : 'white'}
              p="10px 16px"
              _hover={{ bg: actTag === tag ? "black" : "grays.extraLight", color: actTag === tag ? "white" : "" }}
              fontSize="16px"
              fontStyle="500"
              lineHeight="24px"
              onClick={() => {
                filterTemplates(tag);
                setActTag(tag)
              }}
            >
              {tag}
            </Button>
          ))}
        </Flex>

        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: 'repeat(3, 1fr)' }} gap={{ md: "80px 40px", base: "12px" }} mb={{ base: "100px", md: "160px" }}>
          {filteredTemplates.map((template, index) => (
            <GridItem key={index}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                exit="exit"
                transition={{ duration: 0.3, delay: index * 0.3 }}
              >
                <Flex flexDirection="column" alignItems="center">
                  <Link href="/login" isExternal _hover={{ textDecoration: 'none' }} mb={{ base: "12px", md: "22px" }}>
                    <Flex role="group" overflow="hidden" position="relative" borderRadius="32px">
                      <Image src={template.image} />
                      <Flex
                        translate="0.3s all"
                        _groupHover={{ opacity: '1', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                        flexDirection="column"
                        gap="10px"
                        alignItems="center"
                        justifyContent="center"
                        opacity="0"
                        pointerEvents="none"
                        background="black.reg"
                        position="absolute"
                        w="100%"
                        h="100%"
                        fontSize="14px"
                        fontWeight="500"
                        lineHeight="20px"
                        color="white"
                      >
                        <Flex
                          alignItems="center"
                          justifyContent="center"
                          w="46px"
                          h="46px"
                          border="1px solid #C9CCD1"
                          borderRadius="full"
                          backgroundColor='rgba(255, 255, 255, 0.2)'
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
                            <path d="M15.0936 12.7273C15.0936 13.2748 14.6498 13.7185 14.1024 13.7185C13.555 13.7185 13.1112 13.2748 13.1112 12.7273L13.1112 3.90618L2.18742 14.83C1.80034 15.2171 1.17274 15.2171 0.785658 14.83C0.398571 14.4429 0.398571 13.8153 0.785658 13.4282L11.7095 2.50441L2.8883 2.50441C2.34088 2.50441 1.89711 2.06064 1.89711 1.51322C1.89711 0.965794 2.34088 0.522019 2.8883 0.522019L14.1024 0.522021C14.6498 0.52202 15.0936 0.965794 15.0936 1.51322L15.0936 12.7273Z" fill="white" />
                          </svg>
                        </Flex>
                        choose theme
                      </Flex>
                    </Flex>
                  </Link>
                  <Link
                    fontSize="18px"
                    fontWeight="600"
                    lineHeight="24px"
                    mb={{ base: "8px", md: "4px" }}
                    href="/login"
                    isExternal
                    _hover={{ textDecorationLine: 'underline' }}
                  >
                    {template.name}
                  </Link>
                  <Flex
                    fontSize="14px"
                    fontWeight="400"
                    lineHeight="20px"
                    alignItems="center"
                    justifyContent="center"
                    gap="4px"
                    color="grays.medium"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 2.93913 0.42143 1.92172 1.17157 1.17157C1.92172 0.42143 2.93913 0 4 0H16C17.0609 0 18.0783 0.42143 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4V16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20H4C2.93913 20 1.92172 19.5786 1.17157 18.8284C0.42143 18.0783 0 17.0609 0 16V4ZM4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4ZM10 7C9.2044 7 8.4413 7.31607 7.87868 7.87868C7.31607 8.4413 7 9.2044 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.4413 12.6839 9.2044 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.2044 12.6839 8.4413 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7ZM5 10C5 8.6739 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.6739 5 10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.6739 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.6739 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10ZM15.5 6C15.8978 6 16.2794 5.84196 16.5607 5.56066C16.842 5.27936 17 4.89782 17 4.5C17 4.10218 16.842 3.72064 16.5607 3.43934C16.2794 3.15804 15.8978 3 15.5 3C15.1022 3 14.7206 3.15804 14.4393 3.43934C14.158 3.72064 14 4.10218 14 4.5C14 4.89782 14.158 5.27936 14.4393 5.56066C14.7206 5.84196 15.1022 6 15.5 6Z" fill="#70757D" />
                    </svg>
                    {template.followers}
                  </Flex>
                </Flex>
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <ContactForm />
    </Layout >
  );
}

export default Templates;