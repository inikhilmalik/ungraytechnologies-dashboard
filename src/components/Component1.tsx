import React from 'react'
import { useGetDataQuery } from '../redux/features/auth/authApi'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Component1 = () => {
    const { data, isLoading, isError, error } = useGetDataQuery(1)

    console.log(data, "C1")

    if(isLoading){
        return <Spinner/>
    }

    return (
        <Flex p={1} justifyContent={"space-between"} >
            <Box p={2} maxWidth={"32%"} minWidth={"32%"} borderRadius={"15px"} border={"2px solid lightgrey"}>
                <Box>
                    <Text fontSize={18} fontWeight={600} color={"grey"}>
                        Purchases
                    </Text>
                </Box>

                <Flex alignItems={"center"}>
                    <Box>
                        <Text fontSize={25} fontWeight={600} >
                            {data?.purchases}
                        </Text>
                    </Box>
                    <Flex alignItems={"center"} pl={2} pr={2} borderRadius={"20px"} color={"rgb(34, 165, 17)"} bg={"rgb(195, 243, 189)"} border={"1px solid rgb(34, 165, 17)"} ml={"10px"}>
                        <Text>+32%  </Text>
                        <FaArrowTrendUp />
                    </Flex>
                </Flex>

            </Box>

            <Box p={2} maxWidth={"32%"} minWidth={"32%"} borderRadius={"15px"} border={"2px solid lightgrey"}>
                <Box>
                    <Text fontSize={18} fontWeight={600} color={"grey"}>
                        Revenue
                    </Text>
                </Box>
                <Flex alignItems={"center"}>
                    <Box>
                        <Text fontSize={25} fontWeight={600} >
                            ${data?.revenue}
                        </Text>
                    </Box>
                    <Flex alignItems={"center"} pl={2} pr={2} borderRadius={"20px"} color={"rgb(34, 165, 17)"} bg={"rgb(195, 243, 189)"} border={"1px solid rgb(34, 165, 17)"} ml={"10px"}>
                        <Text>+49%  </Text>
                        <FaArrowTrendUp />
                    </Flex>
                </Flex>

            </Box>
            <Box p={2} maxWidth={"32%"} minWidth={"32%"} borderRadius={"15px"} border={"2px solid lightgrey"}>
                <Box>
                    <Text fontSize={18} fontWeight={600} color={"grey"}>
                        Purchases
                    </Text>
                </Box>
                <Flex alignItems={"center"}>
                    <Box>
                        <Text fontSize={25} fontWeight={600} >
                            {data?.purchases}
                        </Text>
                    </Box>
                    <Flex alignItems={"center"} pl={2} pr={2} borderRadius={"20px"} color={"red"} bg={"rgb(248, 227, 232)"} border={"1px solid red"} ml={"10px"}>
                        <Text>+7%  </Text>
                        <FaArrowTrendDown />
                    </Flex>
                </Flex>

            </Box>

        </Flex>
    )
}

export default Component1