import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Text, Flex } from "@chakra-ui/react";

const MenuItem = ({ navigate, title, icon, route }) => {
  const location = useLocation();
  const selected = `/${route}` === location.pathname;
  const [isHovered, setHovered] = useState(false);

  return (
    <Flex
      onClick={() => navigate()}
      alignItems='center'
      p={2}
      bg={selected || isHovered ? "orange.100" : "transparent"}
      pl={10}
      pr={10}
      mt={5}
      borderRadius={100}
      cursor='pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
      <Text pl={2}>{title}</Text>
    </Flex>
  );
};

export default MenuItem;
