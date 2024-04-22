import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";

export default () => {
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Typography
        sx={{ textAlign: "center", marginBottom: "70px" }}
        fontWeight={"bold"}
        letterSpacing={1}
        fontSize={70}
      >
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

const cardWrapperStyle = {
  display: "flex",
  flexWrap: "wrap",
  columnGap: "30px",
  rowGap: "30px",
};
