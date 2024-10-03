import React from "react";
import { Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page, title, description, keywords }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
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
