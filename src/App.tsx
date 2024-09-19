// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import Box from "@mui/material/Box";
import { MainRoutes } from "./routes/routes";


function App() {
  return (
    <>
         <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra orizzontalmente
        }}
      >
        <MainRoutes />
      </Box>
    </>
  );
}

export default App;
