import ArrowBack from "@/public/icons/ArrowBack";
import { Box, Typography } from "@mui/material";

export default ({ goBack }: any) => {
  return (
    <Box display={"inline-block"} data-testid="back-button" onClick={goBack}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          columnGap: 0.5,
          alignItems: "center",
          cursor: "pointer",
          ":hover": {
            "#text": {
              color: "grey.300",
            },
            "#arrow-back": {
              fill: "grey",
            },
          },
          width: "auto",
        }}
      >
        <ArrowBack color="black" />
        <Typography id="text" data-testid="text">
          Back
        </Typography>
      </Box>
    </Box>
  );
};
