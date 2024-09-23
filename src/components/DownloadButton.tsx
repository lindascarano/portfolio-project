import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"; // Icona opzionale

export default function DownloadButton() {
  return (
    <Box
      sx={{
        position: "relative",
        marginTop: 2,
        marginBottom: 2,
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content", // Dimensione del pulsante in base alla larghezza del testo
        // display: "flex",
        // alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />} // Icona di download (opzionale)
        component="a" // Usare un tag <a> per il download
        href="/portfolio-project/files/CV.pdf" // Percorso relativo al file nella cartella public
        download // Attributo che forza il download del file
      >
        <Typography variant="body2">Scarica Il mio CV</Typography>
      </Button>
    </Box>
  );
}
