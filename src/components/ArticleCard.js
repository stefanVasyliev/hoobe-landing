import { Box, Flex, Text, Link, Image, Heading } from '@chakra-ui/react';
import { DateTime } from "luxon";
import { motion } from "framer-motion";

function ArticleCard({ article, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <Flex gap={{ base: "20px", md: "40px" }} alignItems="center" flexDirection={type === "horizon" ? { base: "column", md: "row" } : "column"}>
        <Link w="100%" minW={{ "base": "100%", md: "300px" }} h="100%" maxW={{ base: "100%", md: type === "horizon" ? "350px" : "" }} href={`/article/${article.slug}`} _hover={{ textDecoration: "none" }}>
          <Flex borderRadius={{ base: 18, md: 34 }} overflow="hidden">
            <Image src={article.previewImage} />
          </Flex>
        </Link>

        <Flex alignItems="start" w={type === "horizon" ? { base: "100%", md: "calc(100% - 200px)" } : ""} flexDirection="column">
          <Flex
            mb="20px"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            color="grays.medium"
            alignItems="center"
            gap="12px"

          >
            {DateTime.fromISO(article.createdAt).toFormat("MMM dd yyyy")}
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#70757D" />
            </svg>
            {article.timeRead || 2} min read
          </Flex>

          <Link href={`/article/${article.slug}`} _hover={{ textDecoration: "none" }}>
            <Heading
              as="h2"
              fontSize="24px"
              fontWeight="600"
              lineHeight="124%"
              mb="10px"
              textAlign="left"
              noOfLines={2}
              overflow="hidden"
            >
              {article.title}
            </Heading>
          </Link>
          <Text fontSize="18px" fontWeight="400" lineHeight="24px" textAlign="left" noOfLines={3}>
            {article.shortDescription}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="start"
            gap="12px"
            w="100%"
            color="grays.medium"
            mt="20px"
            pt="20px"
            borderTop="1px solid #E6E7EB"
            flexWrap="wrap"
          >
            {article?.tags?.map((category, index) => (
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
      </Flex>
    </motion.div>
  );
}

export default ArticleCard;
