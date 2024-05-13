import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import Hover from "@/components/Buttons/Hover";

type categoryTypes = {
	category: { name: string; icon: JSX.Element; link: string }[];
};

export default function Categories({ category }: categoryTypes) {
	const { push } = useRouter();
	const handleGo = (link: string) => push(link);
	return (
		<Paper sx={paperStyles({ category })}>
			{category?.map((el, index) => (
				<Box
					role="button"
					key={index}
					onClick={() => handleGo(el?.link)}>
					<Hover text={el?.name}>{el?.icon}</Hover>
				</Box>
			))}
		</Paper>
	);
}

const paperStyles = ({ category }: categoryTypes) => {
	return {
		background: "common.white",
		padding: "10px",
		borderTopLeftRadius: 0,
		display: "grid",
		gridAutoRows: "min-content",
		gridRowGap: "8px",
		gridTemplateColumns: category?.length > 4 ? "1fr 1fr" : "1fr",
		maxHeight: 200,
		width: "100%",
		height: "100%"
	};
};
