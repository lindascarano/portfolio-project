import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ButtonInterface } from "../interfaces/ButtonInterface";

export function BasicButton({ button }: { button: ButtonInterface }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={button.variant}>{button.text}</Button>
    </Stack>
  );
}

// I can use it this way:

// <Stack spacing={2} direction="row">
// <BasicButton
//   button={{ variant: "text", text: "Text Button" }}
// ></BasicButton>
// <BasicButton
//   button={{ variant: "contained", text: "Contained Button" }}
// ></BasicButton>
// <BasicButton
//   button={{ variant: "outlined", text: "Outlined Button" }}
// ></BasicButton>
// </Stack>
