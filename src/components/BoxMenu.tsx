

import { BasicButton } from "./Button";
import { Stack } from "@mui/material";


export function SimpleBoxMenu() {
  return (
   
          <Stack spacing={2} direction="row">
      <BasicButton button={{ variant: "text", text: "HOME",path:'/'}}></BasicButton>
      <BasicButton button={{ variant: "text", text: "ABOUT",path:'/about' }}></BasicButton>
      <BasicButton button={{ variant: "text", text: "WORKS",path:'/works'}}></BasicButton>
      <BasicButton button={{ variant: "text", text: "CONTACTS",path:'/contacts'}}></BasicButton>
    </Stack>
    

  );
}
