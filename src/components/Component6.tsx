import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

let arr = [
    { product: "Camera Mi 360", sold_amount: 432, unit_price: 120, revenue: 51320, rating: 4.18 },
    { product: "Message Gun", sold_amount: 120, unit_price: 60, revenue: 23901, rating: 3.44 },
    { product: "Redmi Note 9", sold_amount: 190, unit_price: 87.6, revenue: 87211, rating: 2.5 },
    { product: "One Plus Nord CE Lite 2", sold_amount: 140, unit_price: 24.1, revenue: 29809, rating: 4.65 },
]

const Component6 = () => {
    return (
        <Box p={2} border={"2px solid lightgrey"} borderRadius={"15px"}>
            <Text fontSize={22} fontWeight={600}>Top Products</Text>
            <Flex borderBottom={"1px solid lightgrey"} p={1} fontWeight={600}>
                <Box minW={"150px"} maxW={"150px"}>Product</Box>
                <Box minW={"150px"} maxW={"100px"}>Sell amount</Box>
                <Box minW={"150px"} maxW={"100px"}>Unit price</Box>
                <Box minW={"100px"} maxW={"100px"}>Revenue</Box>
                <Box minW={"100px"} maxW={"100px"}>Rating</Box>
            </Flex>
            {
                arr.map((item, index) => (
                    <Flex key={index} borderBottom={"1px solid lighgrey"} p={1} >
                        <Box minW={"150px"} maxW={"150px"} fontWeight={600}>{item.product}</Box>
                        <Box minW={"150px"} maxW={"100px"}>{item.sold_amount}</Box>
                        <Box minW={"150px"} maxW={"100px"}>${item.unit_price}</Box>
                        <Box minW={"100px"} maxW={"100px"}>${item.revenue}</Box>
                        <Box minW={"100px"} maxW={"100px"}>{item.rating}</Box>
                    </Flex>
                ))
            }
        </Box>
    )
}

export default Component6