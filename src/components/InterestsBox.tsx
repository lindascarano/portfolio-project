import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import { InterestaInterface } from "../interfaces/InterestsInterface";

export function InterestsBox({ int }: { int: InterestaInterface }) {
  return (
    <>
      <Box
        id={int.id}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 1,
         
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginLeft: 1 }}>
            <Typography variant="h6">{int.text}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
