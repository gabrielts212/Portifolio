import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/poppins";
// import "@fontsource/bai-jamjuree";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
