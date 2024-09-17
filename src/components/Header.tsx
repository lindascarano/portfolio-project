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
          sx={{ width: 200, height: 200 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra orizzontalmente
        }}
      >
        <SimpleBoxMenu></SimpleBoxMenu>
      </Box>
    </>
  );
}
