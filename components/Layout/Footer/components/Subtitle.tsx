import { theme } from "@/theme";
import { Link, Typography } from "@mui/material";

const Subtitle = ({ children, link }: any) => {
	return (
		<Link
			{...(link && { href: link })}
			underline={"hover"}
			style={{
				cursor: "pointer",
				marginBottom: "10px",
				textDecorationColor: theme.palette.grey[500],
				color: theme.palette.grey[500]
			}}
			role="link">
			<Typography
				variant="body2"
				fontWeight={400}
				letterSpacing={2}
				color={"grey.500"}>
				{children}
			</Typography>
		</Link>
	);
};

export default Subtitle;
