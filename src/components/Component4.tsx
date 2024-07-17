import React from 'react'
import { useGetDataQuery } from '../redux/features/auth/authApi'
import { Spinner } from '@chakra-ui/react'

const Component4 = () => {
    const { data,isLoading,isError,error } = useGetDataQuery(4)

    console.log(data,"C4")
    if(isLoading){
        return <Spinner/>
    }
  return (
    <div>Component4</div>
  )
}

export default Component4