import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";

export default () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Box sx={{ p: "50px 0 150px", bgcolor: "grey.100" }}>
        <Container sx={{ mx: "auto" }}>
          <Typography
            sx={{ textAlign: "center", marginBottom: "70px" }}
            variant="h2"
          >
            Popular properties in Tashkent
          </Typography>
          <Box sx={cardWrapperStyle}>
            {suggestions_arr.map((el) => {
              return <SuggestionsCard {...{ el }} />;
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const cardWrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "30px",
};
