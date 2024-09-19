import Box from "@mui/material/Box";
import { Header } from "../components/Header";
import Typography from "@mui/material/Typography";
import backgroundImage from "../images/markus-spiske-k0rVudBoB4c-unsplash gimp.jpg";

export function Works() {
  return (
    <>
       <Box
        sx={{
          height: "100vh", // Altezza della vista completa (full viewport height)
          backgroundImage: `url(${backgroundImage})`, // Imposta l'immagine di sfondo

          width: "100vw", // Larghezza della vista completa (full viewport width)
          backgroundPosition: "left", // L'immagine è centrata
          backgroundRepeat: 'no-repeat', // Non ripete l'immagine
          // display: 'flex', // Usa flexbox per centrare il contenuto
          justifyContent: "center", // Centra orizzontalmente
          alignItems: "center", // Centra verticalmente
        }}
      >
        <Header></Header>
        <Box sx={{ padding: 2, textAlign:"center"}}>
          <Typography variant="h4" >
            <span style={{ backgroundColor: "orange"}}>
             I miei lavori
            </span>
          </Typography>
        </Box>
        <Box sx={{ padding: 2, textAlign:"center"}}>
          <Typography variant="body1" >
            <span style={{ backgroundColor: "pink"}}>
            <b>WIP</b>
          
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
