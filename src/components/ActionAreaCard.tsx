import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { ActionAreaCardInterface } from "../interfaces/ActionAreaCardInterface";



export default function ActionAreaCard({card}:{card:ActionAreaCardInterface} ) {
    const navigate=useNavigate();
    const handleCardClick=()=>{
        navigate(card.path);
    }
    return (
      <Card id={card.id} sx={{ maxWidth:345 }} onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt={card.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
