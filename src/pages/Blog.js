import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Heading, Box, Flex, Button, GridItem, Grid } from "@chakra-ui/react";
import ContactForm from "../components/home/ContactForm";
import ArticleCard from "../components/ArticleCard";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const fields = ["createdAt", "title", "slug", "shortDescription"];
const fieldsQuery = fields.map((field, index) => `&fields[${index}]=${field}`).join("");

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function Blog() {
  const [categories, setCategories] = useState([]);
  const [actCategory, setActCategory] = useState("all");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [pagination, setPagination] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_HOST + `/api/tags?populate=*`)
      .then((response) => response.json())
      .then(({ data }) => setCategories(["all", ...data.map((tag) => tag.tagName)]))
      .catch((error) => console.log(error));

    fetch(
      `${process.env.REACT_APP_API_HOST}/api/articles?pagination[page]=1&pagination[pageSize]=10&populate=*` +
      fieldsQuery
    )
      .then((response) => response.json())
      .then(({ data, meta }) => {
        setPagination(meta.pagination);

        setFilteredArticles(
          data.map((article) => ({
            ...article,
            previewImage: `${process.env.REACT_APP_API_HOST}${article.previewImage.formats.medium.url}`,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const filterArticles = async (category) => {
    await fetch(
      process.env.REACT_APP_API_HOST +
      `/api/articles?${category === "all" ? "" : `filters[tags][tagName]=${category}&`
      }pagination[page]=1&pagination[pageSize]=10&populate=*` +
      fieldsQuery
    )
      .then((response) => response.json())
      .then(({ data, meta }) => {
        setActCategory(category);
        setPagination(meta.pagination);
        setFilteredArticles(
          data.map((article) => ({
            ...article,
            previewImage: `${process.env.REACT_APP_API_HOST}${article.previewImage.url}`,
          }))
        );
      })
      .catch((error) => console.log(error));
  };

  const getMoreArticles = () => {
    fetch(
      `${process.env.REACT_APP_API_HOST}/api/articles?pagination[page]=${pagination?.page + 1
      }&pagination[pageSize]=10&populate=*${actCategory === "all" ? `` : `&filters[tags][tagName]=${actCategory}`}` +
      fieldsQuery
    )
      .then((response) => response.json())
      .then(({ data, meta }) => {
        setPagination(meta.pagination);

        setFilteredArticles([
          ...filteredArticles,
          ...data.map((article) => ({
            ...article,
            previewImage: `${process.env.REACT_APP_API_HOST}${article.previewImage.formats.medium.url}`,
          })),
        ]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout page="blog">
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
          color="black.reg"
          fontSize={{ base: "36px", md: "65px" }}
          fontWeight="800"
          lineHeight="115%"
          letterSpacing=" -1.95px"
          mb="26px"
          textAlign="center"
        >
          blog
        </Heading>

        <Flex
          gap="4px"
          mb={{ base: "40px", md: "60px" }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {categories?.map((category, index) => (
            <Button
              key={index}
              borderRadius="20px"
              color={actCategory === category ? "white" : "black"}
              bg={actCategory === category ? "black" : "white"}
              p="10px 16px"
              _hover={{ bg: actCategory === category ? "black" : "grays.extraLight", color: actCategory === category ? "white" : "" }}
              fontSize="16px"
              fontStyle="500"
              lineHeight="24px"
              onClick={() => filterArticles(category)}
            >
              {category}
            </Button>
          ))}
        </Flex>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: "40px", md: "80px 40px" }}
          mb={{ base: "100px", md: "160px" }}
        >
          {filteredArticles?.map(
            (article, index) =>
              index <= 3 && (
                <InView key={article.slug} triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      animate={inView ? 'animate' : 'initial'}
                      variants={fadeInUp}
                      initial="initial"
                      exit="exit"
                      transition={{ duration: 0.3, delay: index * 0.3 }}
                    >
                      <GridItem
                        transform={{ base: "translateY(0px)", md: `translateY(${index === 0 || index === 2 ? 0 : 60}px)` }}
                      >
                        <ArticleCard article={article} />
                      </GridItem>
                    </motion.div>
                  )}
                </InView>)
          )}
        </Grid>
        {filteredArticles?.length > 4 && (
          <Flex
            mt={{ base: "100px", md: "280px" }}
            mb={{ base: "100px", md: "160px" }}
            justifyContent="center"
            flexDirection="column"
          >
            <Heading
              as="h2"
              fontSize={{ base: "36px", md: "50px" }}
              mb={{ base: "40px", md: "60px" }}
              fontWeight="800"
              lineHeight="124%"
              letterSpacing="-1.5px"
              color="grays.dark"
              textAlign={{ base: "left", md: "center" }}
            >
              other articles
            </Heading>
            <Flex flexDirection="column" mb="60px">
              <Flex justifyContent="center" gap="40px" flexDirection="column">
                {filteredArticles?.map(
                  (articleItem, index) =>
                    index > 3 && (
                      <InView key={articleItem.name} triggerOnce>
                        {({ inView, ref }) => (
                          <motion.div
                            ref={ref}
                            animate={inView ? 'animate' : 'initial'}
                            variants={fadeInUp}
                            initial="initial"
                            exit="exit"
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                          >
                            <ArticleCard type="horizon" article={articleItem} />
                          </motion.div>
                        )}
                      </InView>)
                )}
              </Flex>
            </Flex>
            {pagination?.page < pagination?.pageCount && (
              <Button
                borderRadius="16px"
                m="0 auto"
                width="146px"
                borderWidth="1px"
                bg="white"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="500"
                gap="10px"
                p={0}
                onClick={getMoreArticles}
              >
                show more
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path
                    d="M15.2559 10.4226C15.5814 10.0972 15.5814 9.56954 15.2559 9.2441C14.9305 8.91866 14.4028 8.91866 14.0774 9.2441L8.83333 14.4882L8.83333 1.50002C8.83333 1.03978 8.46024 0.666687 8 0.666687C7.53976 0.666687 7.16667 1.03978 7.16667 1.50002L7.16667 14.4882L1.92259 9.2441C1.59715 8.91866 1.06951 8.91866 0.744077 9.2441C0.418641 9.56954 0.418641 10.0972 0.744077 10.4226L7.41074 17.0893C7.73618 17.4147 8.26382 17.4147 8.58926 17.0893L15.2559 10.4226Z"
                    fill="black"
                  />
                </svg>
              </Button>
            )}
          </Flex>
        )}
      </Box>
      <ContactForm />
    </Layout>
  );
}

export default Blog;
