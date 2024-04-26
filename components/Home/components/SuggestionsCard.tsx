import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Card, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Reviews, Save } from "@mui/icons-material";
import Rating from "@/components/Rating";
import { theme } from "@/theme";

const CardComponent = ({ el }: any) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [shadowPosition, setShadowPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const xOffset = (event.clientX - left) / 30; // Use a divisor for offset sensitivity
      const yOffset = (event.clientY - top) / 30;

      const dynamicShadow = theme.shadows[2]; // Using your subtle shadow
      const updatedShadow = `${xOffset}px ${yOffset}px 8px ${dynamicShadow}`;

      // Update the shadow in React state
      setShadowPosition({ x: xOffset, y: yOffset });
    }
  };

  return (
    <Card
      ref={containerRef}
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        ":hover": {
          boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 20px 10px ${theme.palette.grey[400]}`, // Adjust the shadow format
        },
        transition: "none",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* <CardHeader
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
        subheader={
          <Typography variant="body2" color={"gray"}>
            September 14, 2016
          </Typography>
        }
      /> */}
      <CardMedia component="img" height="194" image={el?.img} alt={el?.img} />
      <Box sx={{ display: "flex", m: "10px" }}>
        <Rating rating={el?.review} />
      </Box>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {el?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={cardActionsWrapperStyles}>
          {actions_arr.map((el, index) => (
            <IconButton
              role="button"
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
