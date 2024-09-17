import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ButtonInterface } from "../interfaces/ButtonInterface";
import { useNavigate } from "react-router-dom";

export function BasicButton({ button }: { button: ButtonInterface }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(button.path);
  };
  return (
    <Stack spacing={2} direction="row">
      <Button variant={button.variant} onClick={handleClick}>
        {button.text}
      </Button>
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
