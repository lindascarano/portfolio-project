import { Avatar, Box } from "@mui/material";
import { SimpleBoxMenu } from "./BoxMenu";
import avatarImage from "../images/jessica-gale-c8Ig9Xka5iM-unsplash.jpg";

export function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra orizzontalmente
        }}
      >
        <Avatar
          alt="Jessica Gale"
          src={avatarImage}
          sx={{ width: 200, height: 200, boxShadow: '4px 6px 20px'}} // LindaCSS: Aggiunta boxshadow
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra orizzontalmente
          marginTop:2,
        }}
      >
        <SimpleBoxMenu></SimpleBoxMenu>
      </Box>
    </>
  );
}
