import { Box, Container, Link, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";
import TooltipClick from "../Tooltips/TooltipClick";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <Container sx={{ margin: "50px auto 150px" }}>
      <TooltipClick
        {...{ open, handleTooltipClose, content: "tooltipContent" }}
      >
        <Link onClick={handleTooltipOpen} underline="hover">
          <Typography
            sx={{ textAlign: "center", marginBottom: "70px" }}
            fontWeight={"bold"}
            variant="h2"
          >
            Popular universities
          </Typography>
        </Link>
      </TooltipClick>
      <Box sx={cardWrapperStyle}>
        {suggestions_arr.map((el) => {
          return <SuggestionsCard {...{ el }} />;
        })}
      </Box>
    </Container>
  );
};

const cardWrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "30px",
};
