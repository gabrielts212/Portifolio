import { ChakraProvider} from "@chakra-ui/react";
// import "../styles/globals.css";
import "@fontsource/poppins";
// import "@fontsource/bai-jamjuree";
import theme from "@/styles/theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
