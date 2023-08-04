import { Flex, Text, Box } from "@chakra-ui/react";

const BodyProject = () => {
  return (
    <Box
      backgroundImage="url('teste.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h="800px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
       w="260px"
       align="center"
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        fontSize="2.5rem"
        fontFamily="Roboto"
        fontWeight="600"
      >
        Meu Portifolio
      </Text>
    </Box>
  );
};

export default BodyProject;
