import { Typography } from "@mui/material";
import { TextBoxInterface } from "../interfaces/TitleBoxInterface";

export function TitleBox({prop}:{prop:TextBoxInterface}) {
  return (
    <>
      <Typography sx={{ textAlign: "center" }} variant="body1">
       {prop.text}
      </Typography>
    </>
  );
}
