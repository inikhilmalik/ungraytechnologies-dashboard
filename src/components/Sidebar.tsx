import React from 'react'
import { Box, Button, Flex, Select, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <Box minW={"13%"} maxW={"13%"} height={"100vh"} borderRight={"3px solid lightgrey"} >

            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Setting</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Team</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Home</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} bg={window.location.pathname == '/dashboard' ? "rgb(203,180,140)" : "white"} onClick={() => navigate("/")}>
                    <Text width={"100%"} textAlign={"start"} >Dashborad</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Campaigns</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Flows</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Integrationz</Text>
                </Button>
            </Box>
            <Box p={2} bg={"white"}>
                <Button mb={1} width={"100%"} >
                    <Text width={"100%"} textAlign={"start"} >Customers</Text>
                </Button>
            </Box>

        </Box>
    )
}

export default Sidebar