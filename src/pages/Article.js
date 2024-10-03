import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { Heading, Box, Flex, GridItem, Grid, Text, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { DateTime } from "luxon";
import ArticleCard from "../components/ArticleCard";
import useWindowWidth from '../../src/hooks/useWindowWidth';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import { fetchRequest } from '../../src/api';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Article() {
  const windowWidth = useWindowWidth();
  const { articleId } = useParams();
  const [pageContent, setPageContent] = useState();
  const [headings, setHeadings] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (articleId) {

      const getData = async () => {
        try {
          const { data } = await fetchRequest(`articles/${articleId}?populate=*`);
          const articlesData = await fetchRequest(`articles?filters[tags][tagName]=${data.tags[0].tagName}&populate=*`);

          setFilteredArticles(articlesData.data)

          if (data.id) {
            const resultHtml = data.content.replace(
              /<h([1-6])>(.*?)<\/h\1>/g,
              (match, level, text) => {
                const originalText = text.trim().replace(/&nbsp;/g, " ").trim();
                const id = originalText.toLowerCase()
                  .replace(/^[\W\d]{0,4}/, "")
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "");
                return `<h${level} id="${id}">${originalText}</h${level}>`;
              }
            );

            setPageContent({ ...data, content: resultHtml });

            const parser = new DOMParser();
            const doc = parser.parseFromString(resultHtml, 'text/html');

            const createHeadingTree = (elements) => {
              const tree = [];
              let currentList = null;

              elements.forEach((el) => {
                if (el.tagName === 'H2') {
                  const id = el.id;
                  const h2Item = { title: el.textContent, id, subheadings: [] };
                  tree.push(h2Item);
                  currentList = h2Item.subheadings;
                } else if (el.tagName === 'H3' && currentList) {
                  const id = el.id;
                  currentList.push({ title: el.textContent, id });
                }
              });

              return tree;
            };

            const headingElements = [...doc.querySelectorAll('h2, h3')];
            const newHeadings = createHeadingTree(headingElements);

            setHeadings(newHeadings);
          }
        } catch (err) {
        } finally { }
      }

      getData();
    }
  }, [articleId]);

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      onClose()
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - 100;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (!pageContent) return null;

  return (
    <Layout
      page="info"
      title={pageContent.title}
      description={pageContent.shortDescription}
      keywords="home, welcome, quality content, resources, articles, community, Hoobe"
    >
      <Box
        position="relative"
        maxW="1290px"
        m={{ base: "108px auto 0", md: "154px auto 60px" }}
        p="0 20px"
        textAlign="center"
        width="100%"
      >
        <Flex flexDirection="column" alignItems="center" mb={{ base: "40px", md: "100px" }}>
          <Flex
            mb="20px"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            color="grays.medium"
            alignItems="center"
            gap="12px"
          >
            {DateTime.fromISO(pageContent.createdAt).toFormat("MMM dd yyyy")}
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#70757D" />
            </svg>
            {pageContent.timeRead || 2} min read
          </Flex>

          <Heading
            as="h1"
            fontSize={{ base: "36px", md: "50px" }}
            fontWeight="800"
            lineHeight="124%"
            mb="10px"
            textAlign="center"
            letterSpacing="-1.5px"
            maxW="800px"
          >
            {pageContent.title}
          </Heading>

          <Flex
            alignItems="center"
            justifyContent="center"
            gap="12px"
            w="100%"
            color="grays.medium"
            mt="20px"
            pt="20px"
            borderTop="1px solid #E6E7EB"
            flexWrap="wrap"
          >
            {pageContent.tags.map((category, index) => (
              <Box
                as="span"
                key={index}
                fontSize="16px"
                fontWeight="400"
                lineHeight="24px"
                px="8px"
                bg="grays.light"
                color="black.reg"
                borderRadius="20px"
              >
                {category.tagName}
              </Box>
            ))}
          </Flex>
        </Flex>

        <Flex gap="80px" alignItems="start">
          {windowWidth > 991 ? <Flex flexDirection="column" alignItems="start" position="sticky" top="100px" minW="344px">
            <Text mb="10px" fontSize="24px" fontWeight="600" lineHeight="124%">
              content
            </Text>

            <Flex flexDirection="column" gap="8px" alignItems="start" fontSize="16px" fontWeight="400" lineHeight="34px">
              {headings.map((heading, index) => (
                <Flex key={index} flexDirection="column">
                  <Box
                    cursor="pointer"
                    as="span"
                    onClick={() => smoothScrollTo(`${heading.id}`)}
                    _hover={{ textDecorationLine: "underline", color: "black" }}
                    color="grays.medium"
                    textAlign="left"
                  >
                    {heading.title}
                  </Box>
                  {heading.subheadings.length > 0 && (
                    <Flex pl="14px" flexDirection="column" mt="10px">
                      {heading.subheadings.map((subheading, subIndex) => (
                        <Box
                          as="span"
                          cursor="pointer"
                          key={subIndex}
                          onClick={() => smoothScrollTo(`${subheading.id}`)}
                          _hover={{ textDecorationLine: "underline", color: "black" }}
                          color="grays.medium"
                          textAlign="left"
                        >
                          {subheading.title}
                        </Box>
                      ))}
                    </Flex>
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex> :
            <>
              <Flex
                position="fixed"
                bottom="0"
                zIndex="100"
                alignItems="center"
                backgroundColor="white.reg"
                w="100%"
                p="20px"
                left="0"
                borderTop="1px solid #E6E7EB"
                justifyContent="space-between"
              >
                <Box
                  as="span"
                  onClick={onOpen}
                  color="black.reg"
                  textAlign="left"
                  fontSize="24px"
                  lineHeight="124%"
                  fontWeight="600"
                >
                  content
                </Box>
                <HamburgerIcon onClick={onOpen} />
              </Flex>
              <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerBody backgroundColor="#fff">
                    <Flex
                      alignItems="center"
                      backgroundColor="white.reg"
                      w="100%"
                      py="20px"
                      justifyContent="space-between"
                    >
                      <Box
                        as="span"
                        onClick={onOpen}
                        color="black.reg"
                        textAlign="left"
                        fontSize="24px"
                        lineHeight="124%"
                        fontWeight="600"
                      >
                        content
                      </Box>
                      <CloseIcon onClick={onClose} />
                    </Flex>

                    <Flex flexDirection="column" gap="8px" alignItems="start" fontSize="16px" fontWeight="400" lineHeight="34px">
                      {headings.map((heading, index) => (
                        <Flex key={index} flexDirection="column">
                          <Box
                            cursor="pointer"
                            as="span"
                            onClick={() => smoothScrollTo(`${heading.id}`)}
                            _hover={{ textDecorationLine: "underline", color: "black" }}
                            color="grays.medium"
                            textAlign="left"
                          >
                            {heading.title}
                          </Box>
                          {heading.subheadings.length > 0 && (
                            <Flex pl="14px" flexDirection="column" mt="10px">
                              {heading.subheadings.map((subheading, subIndex) => (
                                <Box
                                  as="span"
                                  cursor="pointer"
                                  key={subIndex}
                                  onClick={() => smoothScrollTo(`${subheading.id}`)}
                                  _hover={{ textDecorationLine: "underline", color: "black" }}
                                  color="grays.medium"
                                  textAlign="left"
                                >
                                  {subheading.title}
                                </Box>
                              ))}
                            </Flex>
                          )}
                        </Flex>
                      ))}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          }

          <Box className="single-article-content">
            <article dangerouslySetInnerHTML={{ __html: pageContent.content }} />
          </Box>
        </Flex>

        {filteredArticles.length > 0 && (
          <Box
            bg="grays.extraLight"
            borderRadius="34px"
            maxW="1290px"
            m="100px auto 0"
            pb={{ base: "60px", md: "214px" }}
            px="24px"
            pt="100px"
          >
            <Heading
              as="h2"
              color="black.reg"
              fontSize="50px"
              fontWeight="800"
              lineHeight="124%"
              letterSpacing="-1.5px"
              m="0 auto"
              maxW="450px"
              mb="60px"
            >
              Recommended Resources
            </Heading>

            <InView triggerOnce>
              {({ inView, ref }) => (
                <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }} gap="40px">
                  {filteredArticles.map((articleItem, index) =>
                    index < 2 ? (
                      <GridItem key={index} sx={{ "&:nth-of-type(2n)": { transform: windowWidth > 991 ? "translateY(60px)" : "0" } }}>
                        <motion.div
                          ref={ref}
                          animate={inView ? 'animate' : 'initial'}
                          variants={fadeInUp}
                          initial="initial"
                          exit="exit"
                          transition={{ duration: 0.3, delay: index * 0.3 }}
                        >
                          <ArticleCard article={articleItem} />
                        </motion.div>
                      </GridItem>
                    ) : null)}
                </Grid>
              )}
            </InView>
          </Box>
        )}
      </Box>
    </Layout >
  );
}

export default Article;
