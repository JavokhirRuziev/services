import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";

export default () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Box sx={{ p: "100px 0 150px", bgcolor: "grey.100" }}>
        <Container sx={{ margin: "auto" }}>
          <Typography
            sx={{ textAlign: "center", mb: "70px" }}
            fontWeight={"bold"}
            variant="h2"
          >
            Popular universities
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
