import React from "react";
import { ContextProvider } from "./context/context";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Flex, Button, useDisclosure } from "@chakra-ui/react";

import GlobalHeader from "./components/GlobalHeader";
import GlobalDrawerMenu from "./components/GlobalLeftMenu/GlobalLeftMenu";
import HabitModal from "./components/HabitModal/HabitModal";

import DayView from "./components/views/DayView";
import SettingsView from "./components/views/SettingsView";
import MonthlyView from "./components/views/MonthlyView";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ContextProvider>
      <BrowserRouter>
        <Flex justifyContent='space-between' position='relative'>
          <GlobalDrawerMenu />

          <div>
            <GlobalHeader />
            <Routes>
              <Route path='/daily' element={<DayView />} />
              <Route path='/monthly' element={<MonthlyView />} />
              <Route path='/settings' element={<SettingsView />} />
            </Routes>
          </div>

          <Button
            variant='outline'
            variantColor='pink'
            borderRadius='100px'
            width='50px'
            height='50px'
            bg='orange.100'
            fontSize='25px'
            pb='4px'
            position='absolute'
            top='25px'
            right='25px'
            border='0'
            _hover={{ border: "1px solid orange" }}
            _focus={{ boxShadow: 0, bg: "orange.500" }}
            onClick={onOpen}
          >
            +
          </Button>

          <div></div>
          <HabitModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
