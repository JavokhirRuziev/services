import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@/components/Rating";

type cardTypes = {
  el: {
    img: string;
    author_name: string;
    organization_name: string;
    review: number;
    description: string;
  };
};

export default function MediaControlCard({ el }: cardTypes) {
  return (
    <Box>
      <Card sx={{ display: "flex", height: 200, cursor: "pointer" }}>
        <CardMedia
          component="img"
          sx={{ width: 251 }}
          image={el?.img}
          alt={el?.img}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h3">{el?.author_name}</Typography>
            <Typography variant="h4" color="text.secondary">
              {el?.organization_name}
            </Typography>
            <Rating {...{ rating: el?.review }} />
            <Typography variant="h6" color="text.secondary">
              {el?.description.slice(0, 50)}...
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
