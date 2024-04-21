import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";
import {
  cardWrapperStyle,
  containerStyle,
  typographyStyle,
} from "./components/styles";

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
