import { theme } from "@/theme";
import { useMediaQuery } from "@mui/material";

export default () => {
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery(theme.breakpoints.down("desktop"));
  return { mobile, tablet };
};
