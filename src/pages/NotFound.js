import React from "react";
import Layout from "../components/Layout";
import { Heading, Flex, Link } from "@chakra-ui/react";

function NotFound() {

  return (
    <Layout
      page="info"
      title="Oops! Page Not Found - Hoobe"
      description="We're sorry, but the page you're looking for doesn't exist. Return to the homepage or explore our other resources at Hoobe."
      keywords="404, page not found, error, homepage, resources, Hoobe"
    >
      <Flex
        position="relative"
        maxW="1290px"
        p="0 20px"
        m="0 auto"
        textAlign="center"
        width="100%"
        h={{ base: "calc(100dvh - 377px)", md: "calc(100dvh - 128px)" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center" >
          <Heading
            as="h1"
            fontSize={{ base: "50px", md: "70px" }}
            fontWeight="800"
            lineHeight="124%"
            mb="10px"
            textAlign="center"
            letterSpacing="-1.5px"
            maxW="800px"
          >
            404
          </Heading>
          <Link href="/" fontWeight="500" display="flex" alignItems="center" justifyContent="center" borderRadius="full" p="12px 40px" color="white" bg="black" _hover={{ bg: "#E2E8F0" }}>
            go home
          </Link>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default NotFound;
