import React from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/core";
import { Box, Text, Flex, useColorMode, Switch } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import HamburgerToX from "../HamburgerToX";
import MenuItem from "../GlobalLeftMenu/MenuItem";
import { FiSettings } from "react-icons/fi";
import { BsCalendar2Date } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { motion } from "framer-motion";

const GlobalLeftMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  let navigate = useNavigate();

  return (
    <Box
      borderRight='orange'
      position='relative'
      width={!isOpen ? "65px" : "auto"}
      bg='gray.50'
      transition='0.5s'
    >
      {/* Hamburger / X */}
      <Box position='absolute' right={5} top={25} cursor='pointer'>
        <HamburgerToX
          color='#A0AEC0'
          isOpen={isOpen}
          setOpen={isOpen ? onClose : onOpen}
        />
      </Box>
      {/* Menu Options Box*/}
      <Flex
        width={isOpen ? "auto" : 0}
        height='100vh'
        overflow='hidden'
        pt={20}
        pl={isOpen ? "25px" : "0px"}
        pr={isOpen ? "25px" : "0px"}
        style={{ transition: "0.5s" }}
        // transition='0.5s'
        direction='column'
        justifyContent='space-between'
      >
        {/* Menu Items */}
        <Box>
          {/* Daily View */}
          <MenuItem
            navigate={() => navigate("/daily")}
            title='Daily View'
            icon={<GrView fontSize='20px' />}
            route='daily'
          />

          {/* Monthly View */}
          <MenuItem
            navigate={() => navigate("/monthly")}
            title='Monthly View'
            icon={<BsCalendar2Date fontSize='20px' />}
            route='monthly'
          />

          {/* Settings */}
          <MenuItem
            navigate={() => navigate("/settings")}
            title='Settings'
            icon={<FiSettings fontSize='20px' />}
            route='settings'
          />
        </Box>

        {/* Light / Dark Mode */}
        <Flex alignItems='center' pl={10} pb={50}>
          <Switch
            size='md'
            value={colorMode}
            onChange={() => toggleColorMode()}
          />
          <Text pl={2}>Light Mode</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GlobalLeftMenu;
