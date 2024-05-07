import { theme } from "@/theme";
import { useMediaQuery } from "@mui/material";

export default () => {
<<<<<<< HEAD
  const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery(theme.breakpoints.down("desktop"));
  return { mobile, tablet };
=======
	const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
	const tablet = useMediaQuery(theme.breakpoints.down("desktop"));
	return { mobile, tablet };
>>>>>>> main
};
