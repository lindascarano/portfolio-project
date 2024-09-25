import Box from "@mui/material/Box";
import { GridCard } from "../components/GridCard";
import { Contatti } from "./Contatti";

export function Home() {
  return (
    <>
      <Box sx={{ display: "grid", alignItems: "center" }}>
        <Box>
          <Contatti></Contatti>
        </Box>
        <Box>
          <GridCard></GridCard>
        </Box>
      </Box>
    </>
  );
}
