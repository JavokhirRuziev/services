import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReviewsStar from "./components/ReviewsStar";
import { actions_arr } from "./components/data";
import { Card, Avatar, Box, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

const CardComponent = ({ el }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {el?.author_name.slice(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={el?.img}
        alt="Paella dish"
      />
      <Box sx={{ display: "flex" }}>
        <ReviewsStar review={el?.review} />
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {el?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            p: 0,
          }}
        >
          {actions_arr.map((el, index) => (
            <IconButton key={index}>{el?.icon}</IconButton>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default function SuggestionsCard({ el }) {
  return <CardComponent el={el} />;
}
