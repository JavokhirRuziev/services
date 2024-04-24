import { Typography } from "@mui/material";

export default ({ children }: any) => (
  <Typography
    variant="h6"
    color={"white"}
    letterSpacing={3}
    mb={2}
    fontWeight={"bold"}
  >
    {children}
  </Typography>
);
