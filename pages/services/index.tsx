import Layout from "@/components/Layout";
import { Box } from "@mui/material";
import Map from "./components/Map";
import { top_10_arr } from "@/public/data/top_10";
import ServicesCard from "../../components/Cards/ServicesCard";
import Filters from "./components/Filters";
import { useState } from "react";

export default () => {
	const [hoveredCardId, setHoveredCardId] = useState(null);
	return (
		<Layout>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "250px 800px 1fr"
				}}>
				<Filters />
				<Box sx={cardWrapperStyles}>
					{top_10_arr.map((el) => (
						<ServicesCard
							{...{ el, setHoveredCardId, hoveredCardId }}
						/>
					))}
				</Box>
				<Map arr={top_10_arr} hoveredCardId={hoveredCardId} />
			</Box>
		</Layout>
	);
};

const cardWrapperStyles = {
	display: "flex",
	flexDirection: "column",
	rowGap: "20px",
	p: 3,
	scrollbarWidth: "none"
};
