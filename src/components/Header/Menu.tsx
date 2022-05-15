import { Box, Button, Flex, ListItem, UnorderedList } from "@chakra-ui/react";


export const Menu = () => {
 

  return (
    <>
      <Box as="nav">
        <UnorderedList
          fontSize={{ base: "20px", md: "18px", lg: "20px" }}
          fontWeight="500"
          styleType="none"
          color={{ base: "gray.200", md: "yellow.400" }}
          d="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4rem", md: "1rem", lg: "2rem" }}
          alignItems="center"
          mt={{ base: "3rem", md: "0" }}
        >
          <ListItem >Inicio</ListItem>
          <ListItem >Sobre</ListItem>
          <ListItem >Contato</ListItem>
          <ListItem >Cardápio</ListItem>
        </UnorderedList>
      </Box>
      <Flex align="center" justify="center">
        <Button
          mt={{ base: "5rem", md: "0px" }}
          fontSize={{ md: "13px", lg: "16px" }}
          w={{ md: "9rem", lg: "11rem" }}
          bg='transparent'
          border='2px solid'
          color='yellow.400'
          borderColor='red.400'
          _hover={{ borderColor: "red.600" }}
          _active={{
            transform: "scale( 1.05)",
            
          }}
          _focus={{
            boxShadow: "0 0 1px 2px green.600, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          FAÇA SEU PEDIDO
        </Button>
      </Flex>
    </>
  );
};
