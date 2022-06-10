import React from "react";
import { useContext } from "../../context/context";
import moment from "moment";
import { VStack, Flex, Text } from "@chakra-ui/react";

const HorizontalCalendar = () => {
  const { state, dispatch } = useContext();

  // Build Calendar
  const startDay = moment().startOf("week");
  let weekCalendar = [];
  for (let idx = 0; idx < 7; idx++) {
    let newDay = startDay.clone().add(idx, "day");
    weekCalendar = [...weekCalendar, newDay];
  }

  const setDate = (day) => {
    dispatch({ type: "set-date", payload: day.format("MMDDYYYY") });
  };

  return (
    <Flex justifyContent='space-between'>
      {weekCalendar.map((day, idx) => {
        let isSelected = day.format("MMDDYYYY") === state.dateSelected;

        return (
          // Date
          <VStack
            key={idx}
            onClick={() => setDate(day)}
            cursor='pointer'
            bg={isSelected && "orange.100"}
            borderRadius={100}
            p={5}
            border={isSelected && "1px solid orange"}
            color={isSelected && "black"}
          >
            {/* "SU", "MO", "TU" ...*/}
            <Text fontWeight={isSelected ? "800" : "500"}>
              {day.format("dd").toUpperCase()}
            </Text>
            {/* "1", "2", "3" ...*/}
            <Text fontWeight={isSelected ? "800" : "500"}>
              {day.format("D")}
            </Text>
          </VStack>
        );
      })}
    </Flex>
  );
};

export default HorizontalCalendar;
