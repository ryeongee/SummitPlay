import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Font } from "./components/Font";
// import { CEO } from "./page/CEO";
import { AboutUs } from "./page/AboutUS";
import { Contents } from "./page/Contents";
import { Home } from "./page/Home";

function App() {
  return (
    <ChakraProvider>
      <Font />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contents" element={<Contents/>}/>
        {/* <Route path="/ceo" element={<CEO />} /> */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;