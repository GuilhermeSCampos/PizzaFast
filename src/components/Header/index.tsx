import { Box, Heading, Text } from "@chakra-ui/react";
import { Banner } from "../Banner";

import { NavBar } from "./NavBar";
import { useState } from "react";

export const Header = () => {
  const [colorHeader, setColorHeader] = useState(false);

  const NavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorHeader(true);
    } else {
      setColorHeader(false);
    }
  };

  window.addEventListener("scroll", NavbarColor);
  return (
    <>
      <Heading
        zIndex="110"
        w="100%"
        position="fixed"
        bg={colorHeader ? "gray.900" : "transparent"}
        transition="smooth"
       
      >
        <Box
          alignItems="center"
          justifyContent="space-between"
          maxW="1200px"
          mx="auto"
          px="2rem"
          h="80px"
          d="flex"
        >
          <Text
            as="h2"
            color='red.400'
            fontSize="25px"
            fontWeight="500"
          >
            Pizza
            <Text as="strong" color="yellow.400">
              Fast
            </Text>
          </Text>

          <NavBar />
        </Box>
      </Heading>

      <Box   
        w="100%" 
        h="100%" pt={{base:'5rem', md:"8rem"}} zIndex='-1'
        bg='gray.900'
        >
        <Banner />
      </Box>
    </>
  );
};
