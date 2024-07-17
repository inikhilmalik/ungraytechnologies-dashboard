import React from 'react'
import { useGetDataQuery } from '../redux/features/auth/authApi'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'

const Component5 = () => {
    const { data, isLoading, isError, error } = useGetDataQuery(5)

    console.log(data, "C5")
    if(isLoading){
        return <Spinner/>
    }
    return (
        <Box p={2} border={"2px solid lightgrey"} borderRadius={"15px"}>
            <Text fontSize={14} color={"grey"} fontWeight={500}>Community Feedback</Text>
            <Text fontSize={22} fontWeight={600} >Mostly Negative</Text>
            <Flex>
                <Box>
                    <Text color={"grey"} fontWeight={500}>Negative</Text>
                    <Text fontWeight={500}>{data?.negative}</Text>
                </Box>
                <Box ml={"15px"}>
                    <Text color={"grey"} fontWeight={500}>Neutral</Text>
                    <Text fontWeight={500}>{data?.neutral}</Text>
                </Box>
                <Box ml={"15px"}>
                    <Text color={"grey"} fontWeight={500}>Positive</Text>
                    <Text fontWeight={500}>{data?.positive}</Text>
                </Box>

            </Flex>
        </Box>
    )
}

export default Component5