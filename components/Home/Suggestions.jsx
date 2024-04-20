import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "../Cards/SuggestionsCard";

const typographyStyle = {
  textAlign: "center",
  marginBottom: "15px",
};

const cardWrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "30px",
};

const containerStyle = {
  marginTop: "50px",
};

export default () => {
  return (
    <Container sx={containerStyle}>
      <Typography variant="h1" sx={typographyStyle}>
        Suggestions
      </Typography>
      <Box sx={cardWrapperStyle}>
        {suggestions_arr.map((el) => {
          return <SuggestionsCard {...{ el }} />;
        })}
      </Box>
    </Container>
  );
};
