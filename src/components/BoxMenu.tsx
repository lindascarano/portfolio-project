import { BasicButton } from "./Button";
import { Stack } from "@mui/material";

export function SimpleBoxMenu() {
  return (
    <Stack spacing={0.2} direction="row"   >
      <BasicButton
        button={{ variant: "contained", text: "HOME", path: "/portfolio-project/" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "ABOUT", path: "/portfolio-project/about" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "WORKS", path: "/portfolio-project/works" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "Contacts", path: "/portfolio-project/contacts" }}
      ></BasicButton>
    </Stack>
  );
}
