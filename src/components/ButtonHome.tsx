import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function ButtonHome() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/portfolio-project/");
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed", // Fissa il pulsante nella viewport
          bottom: 16, // Distanza dal bordo inferiore
          right: 16, // Distanza dal bordo destro
        }}
      >
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          {"<-"}
        </Button>
      </Box>
    </>
  );
}
