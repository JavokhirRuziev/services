import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ButtonGradient from "../Buttons/ButtonGradient";
import Box from "@mui/material/Box";

export default () => {
	return (
		<Box
			sx={{
				display: "flex",
				maxWidth: 423,
				flexDirection: "column",
				mx: "auto",
				rowGap: "46px",
				mt: "82px",
				mb: "102px"
			}}>
			<Pagination
				count={10}
				size="large"
				shape="rounded"
				renderItem={(item) => (
					<PaginationItem
						{...item}
						sx={{
							"&.Mui-selected": {
								background: "linear-gradient(#A0DAFB, #0A8ED9)",
								color: "common.white",
								fontSize: "16px"
							}
						}}
					/>
				)}
			/>
			<ButtonGradient fullWidth>NextPage</ButtonGradient>
		</Box>
	);
};
