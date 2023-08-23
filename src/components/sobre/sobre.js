// import React from "react";

// const sobre = () => {
//   return <div>sobre</div>;
// };

// export default sobre;
import { Flex, Text, Box } from "@chakra-ui/react";

const BodyProject = () => {
  return (
    <Box
      // backgroundImage="url('teste.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h="400px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        w="120px"
        align="center"
        bg="black"
        color="white"
        fontSize="2.5rem"
        fontFamily="Roboto"
        fontWeight="600"
      >
       Sobre
      </Text>
    </Box>
  );
};

export default BodyProject;
