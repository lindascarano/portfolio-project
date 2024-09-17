// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Container from "@mui/material/Container";
import "./App.css";
import { SimpleBoxMenu } from "./components/BoxMenu";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      {/* LindaHTML:this div has id="root"-> means check #root in App.css file for style*/}
      <Container maxWidth="sm">
        <h3>Frontend From Scratch</h3>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centra orizzontalmente
          }}
        >
          <SimpleBoxMenu></SimpleBoxMenu>
        </Box>
      </Container>
    </>
  );
}

export default App;
