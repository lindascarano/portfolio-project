import Box from "@mui/material/Box";

import { BasicButton } from "./Button";

export function SimpleBoxMenu() {
  return (
    <Box>
      <BasicButton button={{ variant: "text", text: "HOME" }}></BasicButton>
      <BasicButton button={{ variant: "text", text: "ABOUT" }}></BasicButton>
      <BasicButton button={{ variant: "text", text: "WORKS" }}></BasicButton>
      <BasicButton button={{ variant: "text", text: "CONTACTS" }}></BasicButton>
    </Box>
  );
}
