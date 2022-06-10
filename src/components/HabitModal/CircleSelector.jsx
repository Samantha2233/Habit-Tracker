import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function CircleSelector({ text, isSelected, onClickHandler }) {
  return (
    <Box onClick={() => onClickHandler()} cursor='pointer'>
      <Text>{text}</Text>
    </Box>
  );
}
