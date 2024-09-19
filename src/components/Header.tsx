import { Box } from "@mui/material";
import { SimpleBoxMenu } from "./BoxMenu";
// import avatarImage from "../images/jessica-gale-c8Ig9Xka5iM-unsplash.jpg";

export function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centra orizzontalmente
          marginTop: 2,
       
         
        }}
      >
        <SimpleBoxMenu></SimpleBoxMenu>
      </Box>
    </>
  );
}
