import React, { useState } from "react";
import CircleSelector from "./CircleSelector";
import { Flex } from "@chakra-ui/react";

export default function Weekdays() {
  const [isSelected, setSelected] = useState([
    "su",
    "mo",
    "tu",
    "we",
    "th",
    "fr",
    "sa",
  ]);

  const weekdays = [
    { text: "S", value: "su" },
    { text: "M", value: "mo" },
    { text: "T", value: "tu" },
    { text: "W", value: "we" },
    { text: "T", value: "th" },
    { text: "F", value: "fr" },
    { text: "S", value: "sa" },
  ];

  const findIfSelected = (value) => {
    // console.log("value", value);
    let boolean;
    for (let i = 0; i < weekdays.length && boolean !== false; i++) {
      // console.log("weekdays[i].value", weekdays[i].value);
      // console.log("value === weekdays[i].value", value === weekdays[i].value);
      if (value === weekdays[i].value) {
        boolean = true;
      } else {
        boolean = false;
      }
      // console.log("boolean", boolean);
      return boolean;
    }
  };

  return (
    <Flex justifyContent='space-around'>
      {weekdays.map((day) => {
        return (
          <div key={day.value}>
            <CircleSelector
              text={day.text}
              bg={findIfSelected(day.value) && "orange.100"}
              onClickHandler={() => setSelected((prev) => [...prev, day.value])}
            ></CircleSelector>
          </div>
        );
      })}
    </Flex>
  );
}
