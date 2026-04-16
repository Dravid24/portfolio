import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/Layout";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    AOS.init();
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout handleTheme={handleTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
