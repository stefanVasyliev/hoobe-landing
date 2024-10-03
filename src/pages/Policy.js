import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Heading, Box, Flex, Text, Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { DateTime } from "luxon";
import useWindowWidth from '../hooks/useWindowWidth';
import { fetchRequest } from '../../src/api';

function Policy() {
  const windowWidth = useWindowWidth();
  const [pageContent, setPageContent] = useState();
  const [headings, setHeadings] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await fetchRequest(`privacy-olicy`);
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
  }, []);

  const smoothScrollTo = (id) => {
    onClose()
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - 100;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (!pageContent) return null;


  return (
    <Layout page="info"
      title="Privacy Policy - Your Data Protection at Hoobe"
      description="Learn how we protect your personal information and your rights regarding your data. Your privacy matters to us at Hoobe"
      keywords="privacy policy, data protection, personal information, user rights, Hoobe"
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
            textAlign="center"
            letterSpacing="-1.5px"
            maxW="800px"
          >
            {pageContent.title}
          </Heading>
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
                alignItems="center"
                zIndex="100"
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
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" onClick={onOpen}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.5 6.99992C0.5 6.53968 0.873096 6.16659 1.33333 6.16659H14.6667C15.1269 6.16659 15.5 6.53968 15.5 6.99992C15.5 7.46016 15.1269 7.83325 14.6667 7.83325H1.33333C0.873096 7.83325 0.5 7.46016 0.5 6.99992Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.5 1.16659C0.5 0.706348 0.873096 0.333252 1.33333 0.333252H14.6667C15.1269 0.333252 15.5 0.706348 15.5 1.16659C15.5 1.62682 15.1269 1.99992 14.6667 1.99992H1.33333C0.873096 1.99992 0.5 1.62682 0.5 1.16659Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.5 12.8333C0.5 12.373 0.873096 11.9999 1.33333 11.9999H14.6667C15.1269 11.9999 15.5 12.373 15.5 12.8333C15.5 13.2935 15.1269 13.6666 14.6667 13.6666H1.33333C0.873096 13.6666 0.5 13.2935 0.5 12.8333Z" fill="black" />
                </svg>
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
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" onClick={onClose}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.577085 0.57733C0.902522 0.251893 1.43016 0.251893 1.7556 0.57733L6.99967 5.82141L12.2438 0.57733C12.5692 0.251893 13.0968 0.251893 13.4223 0.57733C13.7477 0.902767 13.7477 1.4304 13.4223 1.75584L8.17819 6.99992L13.4223 12.244C13.7477 12.5694 13.7477 13.0971 13.4223 13.4225C13.0968 13.7479 12.5692 13.7479 12.2438 13.4225L6.99967 8.17843L1.7556 13.4225C1.43016 13.7479 0.902522 13.7479 0.577086 13.4225C0.251649 13.0971 0.251649 12.5694 0.577086 12.244L5.82116 6.99992L0.577085 1.75584C0.251649 1.4304 0.251649 0.902767 0.577085 0.57733Z" fill="black" />
                      </svg>
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
      </Box>
    </Layout>
  );
}

export default Policy;
