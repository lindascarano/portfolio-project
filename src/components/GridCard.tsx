
import Box from "@mui/material/Box";
import ActionAreaCardmock from "../interfaces/ActionAreaCardInterface";
import ActionAreaCard from "./ActionAreaCard";

export function GridCard(){
    return(
        <>
        <Box >
         {ActionAreaCardmock.map((card)=><ActionAreaCard key={card.id} card={card}></ActionAreaCard>)}    
        </Box>
       
        </>
    )
}