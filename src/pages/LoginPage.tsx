import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";
import { RootState } from "../redux/store";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const toast = useToast();

  const handleOnSubmit = async () => {
    if (username === "" || password === "")
      return toast({
        title: "Please enter username and password",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });

    if (username === "trial" && password === "assignment123") {
      toast({
        title: "Login successful",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
      navigate("/dashboard");
    }
    else if (username !== "trial") {
      return toast({
        title: "Invalid username",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      })
    }
    else if (password !== "assignment123") {
      return toast({
        title: "Invalid password",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top"
      });
    }


    // try {
    //   const userData = await login({
    //     username: username,
    //     password: password,
    //   }).unwrap();
    //   console.log(userData);
    //   toast({
    //     title: "login",
    //     status: "success",
    //     duration: 4000,
    //     isClosable: true,
    //     position: "top"
    //   });
    //   // navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  // useEffect(() => {
  //   if (isError) {
  //     let errorMessage = "Login failed";
  //     if (error && (error as FetchBaseQueryError).data) {
  //       const errorData = (error as FetchBaseQueryError).data as {
  //         error?: { message: string };
  //       };
  //       errorMessage = errorData?.error?.message || errorMessage;
  //     } else if (error && "status" in error) {
  //       errorMessage = `Login failed with status: ${(error as FetchBaseQueryError).status}`;
  //     }
  //     toast({
  //       title: errorMessage,
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //       position: "top"
  //     });
  //   }
  // }, [isError, error, toast]);

  return (
    <Flex
      width={"100%"}
      align={"center"}
      justify={"center"}
      bg={"gray.50"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Log in to your dashboard</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          width={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={4}>
              <Box></Box>
              <Button
                // isLoading={isLoading}
                onClick={handleOnSubmit}
                bg={"blue.400"}
                colorScheme="blue"
              >
                Log in
              </Button>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Box></Box>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
