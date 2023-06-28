import React from "react";
import RoutesApp from "./Routes";
import { AuthProvider } from "./Context/auth";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider>
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  </ChakraProvider>
);

export default App;
