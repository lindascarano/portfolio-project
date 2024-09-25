import { Box, Typography } from "@mui/material";

import Contact from "../components/Contact";


import { TitleBox } from "../components/TitleBox";
import ContactListInterfacemock from "../interfaces/ContactListInterface";
import TextBoxInterfacemock from "../interfaces/TitleBoxInterface";

export function Contatti() {
  return (
    <>
    <Box sx={{marginBottom:1}}>
       <TitleBox prop={TextBoxInterfacemock[0]}></TitleBox>
      <Contact list={ContactListInterfacemock[1]}></Contact>
      <Typography variant="body1" sx={{textAlign:'center'}}><b>Linda Scarano</b><br/>391.1472953<br/>lindascarano@gmail.com</Typography>
     </Box>
     
    
    </>
  );
}
