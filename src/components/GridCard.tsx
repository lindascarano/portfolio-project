
import Box from "@mui/material/Box";
import ActionAreaCardmock from "../interfaces/ActionAreaCardInterface";
import ActionAreaCard from "./ActionAreaCard";

export function GridCard(){
    return(
        <>
        <Box       sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", // 1 card per riga su schermi piccoli
          sm: "repeat(2, 1fr)", // 2 card per riga su schermi medi
          md: "repeat(3, 1fr)", // 3 card per riga su schermi grandi
        },
        gap: "4px", // Spazio di 3px tra le card
      }}>
         {ActionAreaCardmock.map((card)=><ActionAreaCard key={card.id} card={card}></ActionAreaCard>)}    
        </Box>
       
        </>
    )
}