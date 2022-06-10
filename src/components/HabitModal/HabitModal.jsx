import React, { useState } from "react";
import Tabs from "./Tabs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Input,
  Textarea,
  Switch,
  Flex,
  Divider,
  Box,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { TwitterPicker } from "react-color";
import Weekdays from "./Weekdays";

export default function HabitModal({ isOpen, onClose }) {
  const [color, setColor] = useState("#7bdcb5");

  return (
    <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Name / Description */}
          <Input placeHolder='name' borderRadius='8px 8px 0 0' />
          <Textarea
            placeHolder='description'
            borderRadius='0 0 8px 8px'
            borderTop='0'
          />

          <Flex>
            {/* Icon */}
            <Center
              border='1px solid gray.100'
              borderRadius='8px'
              w='22px'
              h='20px'
              mt={5}
              mr={2}
            >
              <Center
                w='20px'
                h='20px'
                mn='auto'
                bg='pink'
                borderRadius='100px'
              ></Center>
            </Center>

            {/* Color Popover*/}
            <Popover trigger='hover'>
              <PopoverTrigger>
                <Box mt={5} w='22px'>
                  <Box
                    w='20px'
                    h='20px'
                    mn='auto'
                    bg={color}
                    borderRadius='100px'
                    cursor='pointer'
                  ></Box>
                </Box>
              </PopoverTrigger>
              <PopoverContent
                left='calc(50% - 22px)'
                top='10px'
                w='max-content'
              >
                <TwitterPicker
                  color={color}
                  onChangeComplete={(color) => {
                    console.log("color", color);
                    setColor(color.hex);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Flex>

          <Divider pt={3} pb={3} />

          {/* Repeat */}
          <Flex pt={3} alignItems='center'>
            <Text pr={2}>Repeat</Text>
            <Switch />
          </Flex>

          <Tabs />

          <Weekdays />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
