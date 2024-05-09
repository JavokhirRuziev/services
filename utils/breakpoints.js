import { theme } from "@/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

export default () => {
	const mobile = useMediaQuery(theme.breakpoints.down("tablet"));
	const tablet = useMediaQuery(theme.breakpoints.down("desktop"));
	const desktop = useMediaQuery(theme.breakpoints.down("monitor"));

	return { mobile, tablet, desktop };
};
