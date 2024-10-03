import React from "react";
import { Flex } from '@chakra-ui/react';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
  return (
    <React.Fragment>
      <Flex flexDirection="column" minH="100dvh" justifyContent="space-between">
        <Flex flexDirection="column">
          <Header page={page} />
          {children}
        </Flex>
        {page !== "home" && <Footer page={page} />}
      </Flex>
    </React.Fragment>
  );
};

export default Layout;
