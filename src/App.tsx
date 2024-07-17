import React from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Flex>
        <AllRoutes />
      </Flex>
    </>
  );
}

export default App;
