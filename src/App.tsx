// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Container from "@mui/material/Container";
import "./App.css";
import Box from "@mui/material/Box";
import { MainRoutes } from "./routes/routes";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      {/* LindaHTML:this div has id="root"-> means check #root in App.css file for style*/}
      <Container maxWidth="sm">
        <Header></Header>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centra orizzontalmente
          }}
        >
          <MainRoutes></MainRoutes>
        </Box>
      </Container>
    </>
  );
}

export default App;
