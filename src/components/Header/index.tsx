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
        bg={colorHeader ? "green.700" : "transparent"}
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
            color={colorHeader ? "gray.200" : "gray.700"}
            fontSize="25px"
            fontWeight="500"
          >
            Doctor
            <Text as="strong" color={colorHeader ? "green.200" : "green.700"}>
              Care
            </Text>
          </Text>

          <NavBar />
        </Box>
      </Heading>

      <Box bg="blue.200" w="100%" h="100%" pt="5rem">
        <Banner />
      </Box>
    </>
  );
};
