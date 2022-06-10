import React from "react";
import { useContext } from "../context/context";
import { Center, Heading, Flex, Button } from "@chakra-ui/react";
import moment from "moment";

const GlobalHeader = () => {
  const { state } = useContext();

  const findHeaderTitle = (dateSelected) => {
    if (dateSelected === moment().format("MMDDYYYY")) {
      return "Today ";
    } else if (dateSelected === moment().add(1, "days").format("MMDDYYYY")) {
      return "Tomorrow";
    } else if (dateSelected === moment().add(-1, "days").format("MMDDYYYY")) {
      return "Yesterday";
    } else {
      return moment(dateSelected, "MMDDYYYY").format("MMM D");
    }
  };

  return (
    <Center p='3' padding={10}>
      <Heading>{findHeaderTitle(state.dateSelected)}</Heading>
    </Center>
  );
};

export default GlobalHeader;
