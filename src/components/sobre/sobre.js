import { Flex, Text, Box } from "@chakra-ui/react";

const BodyProject = () => {
  return (
    <Box
      backgroundImage="url('imageabout.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h="600px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        w="200px"
        align="center"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        fontFamily="poppins"
        fontSize="2.3rem"
        fontWeight="600"
      >
        Sobre
      </Text>
    </Box>
  );
};

export default BodyProject;
