import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Text} from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box w={"80%"} h="200px" bgGradient="linear(to-t, green.200, pink.500)" >
          <Text fontWeight="extrabold" fontSize="6xl">
              Hello world
          </Text>
        
      </Box>
    </div>
  );
}

export default App;
