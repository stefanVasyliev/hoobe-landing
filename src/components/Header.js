import MobileMenuButton from "./MobileMenuButton";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Image,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import logo from "../assets/logo.png";

const fadeInUp = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Header({ page }) {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Box color="black" px="20px" position="fixed" top="10px" zIndex="1000" transition="transform 0.3s ease" w="100%">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            animate={inView ? "animate" : "initial"}
            variants={fadeInUp}
            initial="initial"
            exit="exit"
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              maxW="1250px"
              w="100%"
              mx="auto"
              bg="white.reg"
              px="12px"
              borderRadius="full"
              borderWidth="1px"
              boxShadow="0px 2px 20px -4px rgba(10, 20, 26, 0.04)"
              borderColor="gray.200"
              transition="background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease"
              h={{ base: "60px", md: "66px" }}
            >
              <Flex alignItems="center" gap={{ base: "0", md: "40px" }}>
                <Link href="/" _hover={{ textDecoration: "none" }}>
                  <Flex alignItems="center" gap="8px">
                    <Image src={logo} alt="Logo" boxSize="40px" />
                    <Text fontSize="3xl" fontWeight="600" lineHeight={10} display={{ base: "none", md: "block" }}>
                      hoo.be
                    </Text>
                  </Flex>
                </Link>

                <Flex alignItems="center" h="64px" gap={6} display={{ base: "none", md: "flex" }}>
                  <Link
                    display="flex"
                    alignItems="center"
                    h="64px"
                    textDecoration="none"
                    transform="translate(0, 1px)"
                    borderBottom={`${page === "templates" ? "2px solid black" : "2px solid transparent"}`}
                    href="/templates"
                    fontSize={14}
                    lineHeight="24px"
                    fontWeight="400"
                    color="black.reg"
                    _hover={{ borderBottom: "2px solid black" }}
                  >
                    templates
                  </Link>
                  <Link
                    display="flex"
                    alignItems="center"
                    h="64px"
                    textDecoration="none"
                    transform="translate(0, 1px)"
                    borderBottom={`${page === "blog" ? "2px solid black" : "2px solid transparent"}`}
                    href="/blog"
                    fontSize={14}
                    lineHeight="24px"
                    fontWeight="400"
                    color="black.reg"
                    _hover={{ borderBottom: "2px solid black" }}
                  >
                    blog
                  </Link>
                </Flex>
              </Flex>

              <Flex alignItems="center" gap={2}>
                <Flex display="flex" gap={2} alignItems="center">
                  <Link fontWeight="500" display="flex" alignItems="center" justifyContent="center" href="/login" borderRadius="full" h="40px" p={{ base: "0 10px", md: "0" }} width={{ base: "auto", md: "146px" }} borderWidth="1px" bg="white" _hover={{ bg: "#E2E8F0" }}>
                    login
                  </Link>
                  <Link href="/signup" fontWeight="500" display="flex" alignItems="center" justifyContent="center" borderRadius="full" h="40px" p={{ base: "0 10px", md: "0" }} width={{ base: "auto", md: "146px" }} color="white" bg="black" _hover={{ bg: "#222429" }}>
                    get started
                  </Link>
                </Flex>
                <MobileMenuButton />
              </Flex>
            </Flex>
          </motion.div>
        )}
      </InView>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" alignItems="left">
              <Link to="/login">
                <Button onClick={onClose} borderRadius="full" width="146px" borderWidth="1px" bg="white.reg">
                  login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  onClick={onClose}
                  borderRadius="full"
                  width="146px"
                  color="grays.white"
                  bg="black"
                  _hover={{ bg: "#222222" }}
                >
                  sign up
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
