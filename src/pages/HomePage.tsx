import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Component1 from "../components/Component1";
import Component3 from "../components/Component3";
import Component4 from "../components/Component4";
import Component5 from "../components/Component5";
import Component2 from "../components/Component2";

const HomePage: React.FC = () => {

  return (
    <Box width={"100%"}>
      <Flex>
        <Sidebar />
        <Box p={1}  minW={"87%"} maxW={"87%"}>
          <Text fontSize={40} fontWeight={600}>Dashboard</Text>
          <Flex>

            <Box  width={"70%"}>
              <Box>
                <Component1 />
              </Box>
              <Box>
                <Component2/>
              </Box>
            </Box>

            <Box ml={2} width={"30%"}>
              <Box>
                <Component3 />
              </Box>
              <Box>
                <Component4 />
              </Box>
              <Box>
                <Component5 />
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomePage;
