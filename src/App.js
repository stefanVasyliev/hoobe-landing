import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import "./App.css";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    white: {
      reg: "#FFF",
    },
    black: {
      reg: "#000",
    },
    primary: {
      dark: "#00838F",
    },
    grays: {
      cloudy: "#A7AAB0",
      white: "#FFF",
      base: "#C9CCD1",
      dark: "#222429",
      extraLight: "#F4F5F7",
      light: "#E6E7EB",
      medium: "#70757D",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box className="App" backgroundColor="white.reg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/terms-of-service" element={<Terms />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
