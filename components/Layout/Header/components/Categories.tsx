import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import Hover from "@/components/Buttons/Hover";

type categoryTypes = {
	category: { name: string; icon: JSX.Element }[];
};

export default function Categories({ category }: categoryTypes) {
	const { push } = useRouter();
	const handleGo = () => push("/services");
	return (
		<Paper sx={paperStyles({ category })}>
			{category?.map((el, index) => (
				<Box role="button" key={index} onClick={handleGo}>
					<Hover text={el?.name}>{el?.icon}</Hover>
				</Box>
			))}
		</Paper>
	);
}

const paperStyles = ({ category }: categoryTypes) => {
	return {
		background: "white",
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
