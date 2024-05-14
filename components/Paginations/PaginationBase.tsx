import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ButtonGradient from "../Buttons/ButtonGradient";
import Box from "@mui/material/Box";
import React, { useState } from "react";

export default () => {
	const [page, setPage] = useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};
	const handleClick = (e: React.ChangeEvent<unknown>) => {
		if (page > 9) {
			return;
		}
		if (page < 1) {
			return;
		}
		handleChange(e, page + 1);
	};
	return (
		<Box sx={paginationWrapperStyles}>
			<Pagination
				page={page}
				onChange={handleChange}
				count={10}
				size="large"
				shape="rounded"
				renderItem={(item) => (
					<PaginationItem {...item} sx={paginationItemStyles} />
				)}
			/>
			<ButtonGradient fullWidth onClick={handleClick}>
				NextPage
			</ButtonGradient>
		</Box>
	);
};

const paginationWrapperStyles = {
	display: "flex",
	maxWidth: 423,
	flexDirection: "column",
	mx: "auto",
	rowGap: "46px",
	mt: "82px",
	mb: "102px"
};

const paginationItemStyles = {
	"&.Mui-selected": {
		background: "linear-gradient(#A0DAFB, #0A8ED9)",
		color: "common.white",
		fontSize: "16px"
	}
};
