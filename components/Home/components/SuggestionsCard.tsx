import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Card, Avatar, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Reviews, Save } from "@mui/icons-material";
import Rating from "@/components/Rating";
import { theme } from "@/theme";

const CardComponent = ({ el }: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        role="region"
        avatar={
          <Avatar sx={{ bgcolor: "error.light" }}>
            {el?.author_name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={el?.img} alt={el?.img} />
      <Box sx={{ display: "flex", m: "10px" }}>
        <Rating rating={el?.review} />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={cardActionsWrapperStyles}>
          {actions_arr.map((el, index) => (
            <IconButton
              aria-label="favorite"
              key={index}
              sx={{ path: { fill: el?.color } }}
            >
              {el?.icon}
            </IconButton>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default function SuggestionsCard({ el }: any) {
  return <CardComponent {...{ el }} />;
}

const cardActionsWrapperStyles = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  p: 0,
};

const actions_arr = [
  { icon: <FavoriteIcon />, color: theme.palette.error.main },
  { icon: <ShareIcon />, color: theme.palette.warning.light },
  { icon: <Save />, color: theme.palette.info.main },
  { icon: <Reviews />, color: theme.palette.primary.main },
];
