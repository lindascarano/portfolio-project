import Box from "@mui/material/Box";

import ContactListInterfacemock from "../interfaces/ContactListInterface";
import Contact from "./Contact";

export function ContactList() {
  return (
    <>
      <Box
        sx={{
          display: "flex", justifyContent:'center',
          // gridTemplateColumns: {
          //   xs: "repeat(1, 1fr)", // 1 card per riga su schermi piccoli
          //   sm: "repeat(2, 1fr)", // 2 card per riga su schermi medi
          //   md: "repeat(3, 1fr)", // 3 card per riga su schermi grandi
          // },
          gap: "8px", // Spazio di 3px tra le card
        }}
      >
        {ContactListInterfacemock.map((list) => (
          <Contact key={list.id} list={list}></Contact>
        ))}
      </Box>
    </>
  );
}
