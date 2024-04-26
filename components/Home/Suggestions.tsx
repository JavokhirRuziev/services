import { Box, Container, Typography } from "@mui/material";
import { suggestions_arr } from "../../public/data/suggestions_data";
import SuggestionsCard from "./components/SuggestionsCard";

export default () => {
  return (
    <Box sx={{ bgcolor: "white" }}>
      <Box
        sx={{
          p: {
            mobile: "25px 0 50px",
            tablet: "40px 0 125px",
            desktop: "50px 0 150px",
          },
          bgcolor: "grey.100",
        }}
      >
        <Container sx={{ margin: "auto" }}>
          <Typography
            sx={{ textAlign: "center", mb: "70px" }}
            fontWeight={"bold"}
            variant="h2"
          >
            Suggestions
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
  justifyContent: "center",
};
