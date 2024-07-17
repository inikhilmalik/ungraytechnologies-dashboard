import React from 'react'
import { useGetDataQuery } from '../redux/features/auth/authApi'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import DonutChartReport from '../reports/DonutChartReport'

const Component3 = () => {
    const { data, isLoading, isError, error } = useGetDataQuery(3)

    console.log(data, "C3")
    if(isLoading){
        return <Spinner/>
    }
    return (
        <Box p={2} border={"2px solid lightgrey"} borderRadius={"15px"} height={"300px"}>
            {/* <Flex justifyContent={"center"}pt={1} pb={1} > */}
            <Flex  alignItems={"center"} height={"180px"} >
                <Box height={"180px"} width={"45%"}>

                    <DonutChartReport val={data?.score} />
                </Box>
                <Box ml={"5px"}>
                    <Text fontSize={25} fontWeight={600}>{data?.score}</Text>
                    <Text>of 100 points.</Text>
                </Box>
            </Flex>
            {/* </Flex> */}
            <Box textAlign={"start"}>
                <Text fontSize={18} fontWeight={600} >{data?.title}?</Text>
                <Text fontSize={16} color={"grey"} fontWeight={600} >{data?.message}</Text>
            </Box>
            <Box mt={"10px"} p={1} pl={1} pr={1} width={"fit-content"} border={"1px solid grey"} borderRadius={"20px"}>
                <Text fontSize={16} fontWeight={600} >Improve your score</Text>
            </Box>
        </Box>
    )
}

export default Component3