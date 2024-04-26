import { useMediaQuery } from "@mui/material";

export default () => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  return { mobile, tablet };
};
