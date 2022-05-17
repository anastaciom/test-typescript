import { LoginPageStyle } from "./style";
import { Box, Input, Button, Image } from "@chakra-ui/react";
import ImageBg from "../../components/assets/imgBg.png";
import React, { useState } from "react";

interface IData {
  email?: string;
  password?: string;
  isManeger:boolean
}

export default function LoginPage() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const [data, setData] = useState<IData[]>([]);

  const [datas, setDatas] = useState<IData>({
    email: "",
    password: "",
    isManeger:true
  });

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
    console.log(datas)
  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPageStyle>
      <Box w="50%" h="100%" p={4} color="white">
        <Image src={ImageBg} alt="imagem background" />
      </Box>
      <Box
        bg="#ffffff2b"
        w="50%"
        h="100%"
        p={4}
        color="white"
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <Box
          bg="#ffffffc7"
          w="50%"
          h="50%"
          m={20}
          p={4}
          borderWidth="2px"
          borderRadius="50px"
          color="white"
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          flexDirection="column"
        >
          <Input
            borderRadius="10"
            placeholder="E-mail"
            size="lg"
            color="#000"
            width="80%"
            name='email'
            value={datas.email}
            onChange={handleChangeValues}
          />
          <Input
            borderRadius="10"
            placeholder="Password"
            size="lg"
            color="#000"
            width="80%"
            name='password'
            value={datas.password}
            onChange={handleChangeValues}
          />
          <Button colorScheme="blue" p="6" width="80%" onClick={handleSubmit}>
            Sign-in
          </Button>
        </Box>
      </Box>
    </LoginPageStyle>
  );
}
