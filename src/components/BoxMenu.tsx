import { BasicButton } from "./Button";
import { Stack } from "@mui/material";

export function SimpleBoxMenu() {
  return (
    <Stack spacing={2} direction="row">
      <BasicButton
        button={{ variant: "contained", text: "HOME", path: "/" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "ABOUT", path: "/about" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "WORKS", path: "/works" }}
      ></BasicButton>
      <BasicButton
        button={{ variant: "contained", text: "Contacts", path: "/contacts" }}
      ></BasicButton>
    </Stack>
  );
}
