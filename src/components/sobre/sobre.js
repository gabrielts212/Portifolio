import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const BodyProject = () => {
  return (









    
    <Box
      w="100%"
      h="600px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      zIndex="1"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="video2.mp4" type="video/mp4" />
      </video>
      <Text
       w="200px"
        align="center"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        fontFamily="poppins"
        fontSize="2.3rem"
        fontWeight="600"
        zIndex="1"
      >
       Sobre
      </Text>
    </Box>
  );
};

export default BodyProject;
