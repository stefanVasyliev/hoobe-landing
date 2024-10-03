import React from "react";
import { Box, Heading, Flex, Image, Text, Link } from "@chakra-ui/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import creatorpassImage from "../../assets/creatorpass-image.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Creatorpass = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      m="0 20px"
      borderRadius="34px"
      background="linear-gradient(120deg, rgba(172, 235, 233, 0.40) -2.04%, rgba(212, 211, 254, 0.40) 97.79%), var(--graysWhite, #FFF)"
    >
      <Box
        position="relative"
        textAlign="center"
        width="100%"
        borderRadius="34px"
        pt="100px"
        pb="16px"
        maxW="1290px"
        px="20px"
      >
        <Flex
          mb={{ base: "40px", lg: "70px" }}
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          gap={{ base: "40px", lg: "0" }}
        >
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                animate={inView ? "animate" : "initial"}
                variants={fadeInUp}
                initial="initial"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Flex
                  maxW={{ base: "100%", lg: "360px" }}
                  flexDirection="column"
                  gap="20px"
                  alignItems={{ base: "center", lg: "start" }}
                >
                  <Heading
                    as="h2"
                    textAlign={{ base: "center", lg: "start" }}
                    fontSize={{ base: "36px", md: "48px" }}
                    lineHeight="124%"
                    letterSpacing="-1.5px"
                    fontWeight="800"
                    maxW="614px"
                    color="grays.dark"
                  >
                    discover opportunities on creatorpass
                  </Heading>

                  <Link
                    href="/me/creatorpass/discover"
                    isExternal
                    color="black.reg"
                    fontSize="18px"
                    fontStyle="800"
                    lineHeight="124%"
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    discover available offers
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path
                        d="M11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893C9.90237 0.683417 9.90237 1.31658 10.2929 1.70711L16.5858 8H1C0.447716 8 0 8.44771 0 9C0 9.55229 0.447716 10 1 10H16.5858L10.2929 16.2929C9.90237 16.6834 9.90237 17.3166 10.2929 17.7071C10.6834 18.0976 11.3166 18.0976 11.7071 17.7071L19.7071 9.70711C20.0976 9.31658 20.0976 8.68342 19.7071 8.29289L11.7071 0.292893Z"
                        fill="black"
                      />
                    </svg>
                  </Link>
                </Flex>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                animate={inView ? "animate" : "initial"}
                variants={fadeInUp}
                initial="initial"
                exit="exit"
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <Image
                  src={creatorpassImage}
                  maxW={{ base: "360px", lg: "400px" }}
                />
              </motion.div>
            )}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <Flex
                flexDirection="column"
                maxW={{ base: "100%", lg: "340px" }}
                gap="40px"
                ref={ref}
              >
                <motion.div
                  animate={inView ? "animate" : "initial"}
                  variants={fadeInUp}
                  initial="initial"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <Flex
                    flexDirection="column"
                    alignItems={{ base: "center", lg: "start" }}
                    gap="16px"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path
                        opacity="0.4"
                        d="M2.50049 13.8481C2.56299 16.7706 2.73799 21.7694 2.76299 22.3206C2.85174 23.4994 3.30299 24.6906 4.00549 25.5306C4.98299 26.7094 6.18674 27.2356 7.86549 27.2356C10.1855 27.2481 12.743 27.2481 15.2267 27.2481C17.7205 27.2481 20.1405 27.2481 22.1842 27.2356C23.8392 27.2356 25.0805 26.6956 26.0455 25.5306C26.748 24.6906 27.1992 23.4869 27.263 22.3206C27.288 21.8569 27.413 16.4306 27.488 13.8481H2.50049Z"
                        fill="#00838F"
                      />
                      <path
                        d="M14.0571 19.2302V20.8477C14.0571 21.3652 14.4771 21.7852 14.9946 21.7852C15.5121 21.7852 15.9321 21.3652 15.9321 20.8477V19.2302C15.9321 18.7127 15.5121 18.2927 14.9946 18.2927C14.4771 18.2927 14.0571 18.7127 14.0571 19.2302"
                        fill="#00838F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.7642 18.1955C12.6392 18.6492 12.203 18.9392 11.7305 18.8767C8.54174 18.4317 5.49424 17.3005 2.92174 15.6017C2.65799 15.4292 2.50049 15.1342 2.50049 14.8192V10.4867C2.50049 7.86174 4.64049 5.72674 7.27174 5.72674H9.73049C9.96549 3.91174 11.503 2.50049 13.3805 2.50049H16.608C18.4842 2.50049 20.023 3.91174 20.258 5.72674H22.7292C25.353 5.72674 27.488 7.86174 27.488 10.4867V14.8192C27.488 15.1342 27.3292 15.428 27.068 15.6017C24.4905 17.308 21.4305 18.4442 18.2205 18.888C18.1767 18.8942 18.1342 18.8967 18.0917 18.8967C17.668 18.8967 17.2892 18.6105 17.183 18.1905C16.9305 17.1955 16.0267 16.4992 14.988 16.4992C13.9355 16.4992 13.0417 17.1805 12.7642 18.1955ZM16.608 4.37549H13.3805C12.5392 4.37549 11.8367 4.95049 11.6267 5.72674H18.3605C18.1505 4.95049 17.448 4.37549 16.608 4.37549Z"
                        fill="#00838F"
                      />
                    </svg>

                    <Text
                      textAlign={{ base: "center", lg: "start" }}
                      fontSize="18px"
                      fontWeight="500"
                    >
                      Unlock Exclusive Experiences: Access unique events,
                      products, and more
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  ref={ref}
                  animate={inView ? "animate" : "initial"}
                  variants={fadeInUp}
                  initial="initial"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  <Flex
                    flexDirection="column"
                    alignItems={{ base: "center", lg: "start" }}
                    gap="16px"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <rect
                        x="5.99951"
                        y="15"
                        width="18"
                        height="11"
                        rx="2"
                        fill="#88C7CF"
                      />
                      <rect
                        x="4"
                        y="9.00031"
                        width="22"
                        height="6"
                        rx="1"
                        fill="#00838F"
                      />
                      <path
                        d="M15 8.75H10.5804C9.92916 8.75 9.30463 8.48661 8.84416 8.01777C8.38369 7.54893 8.125 6.91304 8.125 6.25C8.125 5.58696 8.38369 4.95107 8.84416 4.48223C9.30463 4.01339 9.92916 3.75 10.5804 3.75C14.0179 3.75 15 8.75 15 8.75ZM15 8.75H19.4196C20.0708 8.75 20.6954 8.48661 21.1558 8.01777C21.6163 7.54893 21.875 6.91304 21.875 6.25C21.875 5.58696 21.6163 4.95107 21.1558 4.48223C20.6954 4.01339 20.0708 3.75 19.4196 3.75C15.9821 3.75 15 8.75 15 8.75ZM6.25 15H23.75V22.25C23.75 23.6501 23.75 24.3502 23.4775 24.885C23.2378 25.3554 22.8554 25.7378 22.385 25.9775C21.8502 26.25 21.1501 26.25 19.75 26.25H10.25C8.84987 26.25 8.1498 26.25 7.61502 25.9775C7.14462 25.7378 6.76217 25.3554 6.52248 24.885C6.25 24.3502 6.25 23.6501 6.25 22.25V15ZM5.75 15H24.25C24.9501 15 25.3001 15 25.5675 14.8638C25.8027 14.7439 25.9939 14.5527 26.1138 14.3175C26.25 14.0501 26.25 13.7001 26.25 13V10.75C26.25 10.0499 26.25 9.6999 26.1138 9.43251C25.9939 9.19731 25.8027 9.00608 25.5675 8.88624C25.3001 8.75 24.9501 8.75 24.25 8.75H5.75C5.04993 8.75 4.6999 8.75 4.43251 8.88624C4.19731 9.00608 4.00608 9.19731 3.88624 9.43251C3.75 9.6999 3.75 10.0499 3.75 10.75V13C3.75 13.7001 3.75 14.0501 3.88624 14.3175C4.00608 14.5527 4.19731 14.7439 4.43251 14.8638C4.6999 15 5.04993 15 5.75 15Z"
                        stroke="#00838F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.0007V25.0007"
                        stroke="#00838F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>

                    <Text
                      textAlign={{ base: "center", lg: "start" }}
                      fontSize="18px"
                      fontWeight="500"
                    >
                      Collaborate with Top Brands: Partner with leading
                      companies on exciting campaigns.
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  ref={ref}
                  animate={inView ? "animate" : "initial"}
                  variants={fadeInUp}
                  initial="initial"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 1.4 }}
                >
                  <Flex
                    flexDirection="column"
                    alignItems={{ base: "center", lg: "start" }}
                    gap="16px"
                    justifyContent="start"
                  >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="14.5" r="9" fill="#88C7CF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.7803 2.41835C16.8823 -0.0847629 13.1193 -0.0847629 11.2213 2.41835C10.7315 3.06426 9.93138 3.39569 9.12833 3.28528C6.01628 2.85739 3.35544 5.51823 3.78333 8.63028C3.89374 9.43333 3.56231 10.2335 2.9164 10.7232C0.413284 12.6212 0.413284 16.3842 2.9164 18.2822C3.56231 18.772 3.89374 19.5721 3.78333 20.3752C3.35544 23.4872 6.01628 26.1481 9.12833 25.7202C9.93138 25.6098 10.7315 25.9412 11.2213 26.5871C13.1193 29.0902 16.8823 29.0902 18.7803 26.5871C19.27 25.9412 20.0702 25.6098 20.8732 25.7202C23.9853 26.1481 26.6461 23.4872 26.2182 20.3752C26.1078 19.5721 26.4392 18.772 27.0851 18.2822C29.5883 16.3842 29.5883 12.6212 27.0851 10.7232C26.4392 10.2335 26.1078 9.43333 26.2182 8.63029C26.6461 5.51823 23.9853 2.85739 20.8732 3.28528C20.0702 3.39569 19.27 3.06426 18.7803 2.41835ZM13.7503 5.75098V8.25098H13.4296C11.5356 8.25098 10.0003 9.78631 10.0003 11.6802C10.0003 13.1563 10.9448 14.4668 12.3451 14.9335L16.8649 16.4401C17.2444 16.5666 17.5003 16.9217 17.5003 17.3217C17.5003 17.8349 17.0843 18.251 16.571 18.251H13.7503C13.0599 18.251 12.5003 17.6913 12.5003 17.001H10.0003C10.0003 19.072 11.6792 20.751 13.7503 20.751V23.251H16.2503V20.751H16.571C18.465 20.751 20.0003 19.2156 20.0003 17.3217C20.0003 15.8456 19.0558 14.5352 17.6555 14.0684L13.1357 12.5618C12.7563 12.4353 12.5003 12.0802 12.5003 11.6802C12.5003 11.167 12.9164 10.751 13.4296 10.751H16.2503C16.9407 10.751 17.5003 11.3106 17.5003 12.001H20.0003C20.0003 9.92991 18.3214 8.25098 16.2503 8.25098V5.75098H13.7503Z"
                        fill="#00838F"
                      />
                    </svg>
                    <Text
                      textAlign={{ base: "center", lg: "start" }}
                      fontSize="18px"
                      fontWeight="500"
                    >
                      Monetize Your Content: Turn your passion into profit with
                      exclusive offers.
                    </Text>
                  </Flex>
                </motion.div>
              </Flex>
            )}
          </InView>
        </Flex>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              animate={inView ? "animate" : "initial"}
              variants={fadeInUp}
              initial="initial"
              exit="exit"
              transition={{ duration: 0.3, delay: 1.4 }}
            >
              <Text
                textAlign="center"
                color="grays.dark"
                maxW="400px"
                m="0 auto"
                fontSize="14px"
                fontWeight="400"
                lineHeight="20px"
              >
                to partner with us on Creatorpass offers please reach out to
                <Link ml="6px" color="primary.dark">
                  business@hoo.be
                </Link>
              </Text>
            </motion.div>
          )}
        </InView>
      </Box>
    </Flex>
  );
};

export default Creatorpass;
