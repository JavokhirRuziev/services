import { useMediaQuery } from "@mui/material";

export default () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  return console.log(mobile);
};
