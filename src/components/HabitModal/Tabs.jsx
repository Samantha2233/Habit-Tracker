import React, { useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Tabs = () => {
  const [isSelected, setSelected] = useState("Daily");

  const options = ["Daily", "Weekly", "Monthly"];

  return (
    <Box pt={3} pb={3}>
      <Flex
        border='1px solid orange.500'
        borderRadius='100px'
        justifyContent='space-around'
        alignItems='center'
        // p={1}
      >
        {options.map((name) => {
          return (
            <Box
              key={name}
              bg={isSelected === name && "orange.100"}
              borderRadius='100px'
              p={2}
              pl={4}
              pr={4}
              onClick={() => setSelected(name)}
            >
              <Text>{name}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Tabs;
