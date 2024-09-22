import { useNavigate } from "react-router-dom";
import { ContactListInterface } from "../interfaces/ContactListInterface";
import List from "@mui/material/List";
import { Box} from "@mui/material";

export default function Contact({ list }: { list: ContactListInterface }) {
  const navigate = useNavigate();
  const handleListClick = () => {
    // Controlla se l'URL è esterno (http/https)
    if (list.path.startsWith("http")) {
      // Apri il link esterno in una nuova scheda
      window.open(list.path, "_blank", "noopener noreferrer");
    } else {
      // Se l'URL è interno, usa navigate
      navigate(list.path);
    }
  };
  return (
    <List
      id={list.id}
      onClick={handleListClick}
      sx={{ display: "flex",alignItems: 'center'}}
    >
      <Box 
        component="img"
        src={list.icon}
        width={list.width}
        style={{ margin: "auto" }}
      ></Box>
      {/* <Box sx={{}}>
         <Typography variant="body2">{list.text}</Typography>
      </Box> */}
     
    </List>
  );
}
