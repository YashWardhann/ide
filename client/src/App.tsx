import React, { useState } from 'react';
import logo from './logo.svg';

import {
  Box, Button, Flex
} from "@chakra-ui/react"
import './App.css';

import { Editor } from "./components/Editor";

import { io } from "socket.io-client";

function App() {
  const [ isLoading, setIsLoading ] = useState(false);

  const runButtonHandler = () => {
    setIsLoading(true);
    console.log("Connected!");
    const socket = io("localhost:8080");
  }

  return (
    <div className="App">
      <Flex
        w="100vw"
        h="100vh"
        flexDirection="column"
      >
        
        <Flex flex="3">
          <Editor 
            defaultCode="#Insert Code Here!"
          />
        </Flex>

        <Flex flex="1">
          <Button
            isLoading={isLoading}
            loadingText="Loading"
            colorScheme="teal"  
            onClick={runButtonHandler}
          >
            Run Code
          </Button>
        </Flex>
        
      </Flex>
    </div>
  );
}

export default App;
