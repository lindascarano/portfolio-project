import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { InterestaInterface } from "../interfaces/InterestsInterface";

export function InterestsBox({ int }: { int: InterestaInterface }) {
  return (
    <>
      <Box
        id={int.id}
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          marginBottom: 1,
          marginLeft: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={int.image} title="libri"></Avatar>
          <Box sx={{ marginLeft: 1 }}>
            <Typography variant="h6">{int.text}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
