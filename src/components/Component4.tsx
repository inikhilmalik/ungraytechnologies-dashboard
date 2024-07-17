import React from 'react'
import { useGetDataQuery } from '../redux/features/auth/authApi'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import LineChart from '../reports/LineChartReport'

const Component4 = () => {
  const { data, isLoading, isError, error } = useGetDataQuery(4)

  console.log(data, "C4")
  if (isLoading) {
    return <Spinner />
  }
  return (
    <Box p={2} pt={5} pb={5} border={"2px solid lightgrey"} borderRadius={"15px"}  m={1}>
      <Box>
        <LineChart />
      </Box>
      <Flex>
        <Box>
          <Text color={"grey"} fontWeight={500}>Web sales</Text>
          <Text fontWeight={700}>1304%</Text>
        </Box>
        <Box ml={"10px"}>
          <Text color={"grey"} fontWeight={500}>Offline selling</Text>
          <Text fontWeight={700}>473%</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Component4