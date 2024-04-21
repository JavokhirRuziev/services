import { Box, Container, Typography } from "@mui/material";
import { footerWrapper } from "./components/styles";

export default () => {
  return (
    <Box sx={footerWrapper}>
      <Container>
        <Typography variant="h5" textAlign={"center"}>
          Copyright © 2004–2024 Yelp Inc. Yelp, Yelp logo, Yelp burst and
          related marks are registered trademarks of Yelp.
        </Typography>
      </Container>
    </Box>
  );
};
