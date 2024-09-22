
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download'; // Icona opzionale

export default function DownloadButton() {
  return (
    <Box
        sx={{
            position: "fixed",  // Fissa il pulsante nella viewport
            top: 16,             // Posiziona il pulsante in alto
            left: "50%",        // Allinea il pulsante a metà rispetto alla larghezza della viewport
            transform: "translateX(-50%)", // Centra esattamente l'elemento orizzontalmente
            zIndex: 1000,       // Assicurati che il pulsante stia sopra altri contenuti
        }}
      >
    <Button
    
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />} // Icona di download (opzionale)
      component="a" // Usare un tag <a> per il download
      href="/portfolio-project/public/files/CVLindaScaranoIta.pdf" // Percorso relativo al file nella cartella public
      download // Attributo che forza il download del file
    >
      <Typography variant="body2">Il mio CV</Typography>
    </Button>
    </Box>
  );
}