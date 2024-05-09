import { theme } from "@/theme";
import Link from "@mui/material/Link";

const Subtitle = ({ children, link }: any) => {
	return (
		<Link
			{...(link && { href: link })}
			underline={"hover"}
			sx={{
				cursor: "pointer",
				marginBottom: "10px",
				color: "grey.500",
				...theme.typography.body2
			}}
			role="link">
			{children}
		</Link>
	);
};

export default Subtitle;
