import { Container, Input, VStack, HStack, Box, Image, Text, Tabs, TabList, Tab, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const placeholderImages = [
    "/images/stopwatch_placeholder_1.png",
    "/images/stopwatch_placeholder_2.png",
    "/images/stopwatch_placeholder_3.png",
    "/images/stopwatch_placeholder_4.png",
    "/images/stopwatch_placeholder_5.png",
    "/images/stopwatch_placeholder_6.png",
    "/images/stopwatch_placeholder_7.png",
    "/images/stopwatch_placeholder_8.png",
    "/images/stopwatch_placeholder_9.png",
    "/images/stopwatch_placeholder_10.png",
    "/images/stopwatch_placeholder_11.png",
    "/images/stopwatch_placeholder_12.png",
  ];

  const filters = ["Anime", "Background", "Art", "Drawing", "Pokemon", "Car", "Logo", "Galaxy", "Dragon", "Wolf", "Girl"];

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4} w="full">
          <Input placeholder="Search" size="lg" />
          <Box as={FaSearch} size="24px" />
        </HStack>
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab>All</Tab>
            <Tab>Images</Tab>
            <Tab>Videos</Tab>
            <Tab>News</Tab>
            <Tab>Books</Tab>
            <Tab>More</Tab>
          </TabList>
        </Tabs>
        <HStack spacing={2} overflowX="auto" py={2}>
          {filters.map((filter, index) => (
            <Box key={index} px={4} py={2} bg="gray.200" borderRadius="md" whiteSpace="nowrap">
              {filter}
            </Box>
          ))}
        </HStack>
        <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
          {placeholderImages.map((src, index) => (
            <GridItem key={index}>
              <Image src={src} alt={`Placeholder ${index}`} />
              <Text>Placeholder Image {index + 1}</Text>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;