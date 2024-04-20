import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ReviewsStar from "./ReviewsStar";

export default function MediaControlCard({ el }) {
  const theme = useTheme();

  return (
    <Box>
      <Card sx={{ display: "flex", height: 200 }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={el?.img}
          alt={el?.img}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h2">{el?.author_name}</Typography>
            <Typography variant="h3" color="text.secondary">
              {el?.organization_name}
            </Typography>
            <ReviewsStar {...{ review: el?.review }} />
            <Typography variant="h5" color="text.secondary">
              {el?.description.slice(0, 50)}...
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
