import Box from "@mui/material/Box";

import backgroundImage from "../images/markus-spiske-k0rVudBoB4c-unsplash gimp.jpg";
import { Header } from "../components/Header";
import Container from "@mui/material/Container";

export function Home() {
  return (
    <>
      <Box
        sx={{
          height: "100vh", // Altezza della vista completa (full viewport height)
          backgroundImage: `url(${backgroundImage})`, // Imposta l'immagine di sfondo

          backgroundSize: "cover", // L'immagine copre l'intera area
          backgroundPosition: "center", // L'immagine è centrata
          // backgroundRepeat: 'no-repeat', // Non ripete l'immagine
          // display: 'flex', // Usa flexbox per centrare il contenuto
          justifyContent: "center", // Centra orizzontalmente
          alignItems: "center", // Centra verticalmente
        }}
      >
       <Header></Header>
        <Box sx={{padding:2}}>
          <h2>
            <span style={{ backgroundColor: "orange" }}>
              Ciao e benvenut* nel mio porfolio!
            </span>
          </h2>
        </Box>
        <Box sx={{padding:2}}>
          <span style={{ backgroundColor: "pink" }}>
            Sono <b>Linda Scarano</b>, una <b>sviluppatrice frontend </b>con una
            grande passione per la creazione di esperienze web moderne,
            funzionali e intuitive. Nel mio lavoro, amo{" "}
            <b>trasformare idee e progetti in realtà</b>, utilizzando le più
            recenti tecnologie del web per realizzare
            <b>
              siti performanti e interfacce utente che catturano l’attenzione
            </b>
            .
          </span>
        </Box>
        
      </Box>
    </>
  );
}
