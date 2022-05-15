import { Box, Flex, Grid, GridItem, Text, Image, Button } from "@chakra-ui/react";

const cardsService = [
  {
    image: '/assets/pizza.png',
    title: "Muçarela",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    image: '/assets/pizza10.png',
    title: "Bacon",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    image: '/assets/pizza3.png',
    title: "Camarao",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {

    image: '/assets/pizza8.png',
    title: "Chocolate",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    image: '/assets/pizza5.png',
    title: "Portuguesa",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
  {
    image: '/assets/pizza6.png',
    title: "Nordestina",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
  },
];

export const Services = () => {
  return (
    <Box as="section" mt="5rem" pb="4rem">
      <Box
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb="3rem"
      >
        <Text
          as="h4"
          color="red.500"
          fontSize="14px"
          fontWeight="bold"
          lineHeight="21px"
        >
          CARDAPIO
        </Text>
        <Text
          as="h2"
          fontWeight="bold"
          fontSize="30px"
          color="gray.600"
          textAlign="center"
          mb="3rem"
        >
          Como podemos ajudá-lo a escolher?
        </Text>
      </Box>
      <Flex align="center" justify="center">
        <Grid
          gap="5"
          templateColumns={{
            sm: "repeat(auto-fit, minmax(300px, 1fr))",
            lg: "repeat(3,1fr)",
          }}
        >
          {cardsService.map((card) => (
            <GridItem key={card.title}>
              <Box
                bg="white"
                d="flex"
                flexDirection="column"
                w="320px"
                p="1.2rem"
                borderRadius="5px"
                mb=".5rem"
              >
                <Image color='red.400' w="25px" py="1rem" src="/image/group.svg" />
               <Image src={card.image} alt={card.title}/>
                <Text
                  as="h3"
                  textAlign="center"
                  color="gray.600"
                  fontSize="22px"
                  fontWeight="bold"
                  py='.8rem'
                >
                  {card.title}
                </Text>
                <Text
                  as="p"
                  color="gray.500"
                  mt=".7rem"
                  fontSize="16px"
                  fontWeight="400"
                >
                  {card.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
          
        
    </Box>
  );
};
