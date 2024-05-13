import Layout from "@/components/Layout";
import Slider from "./components/Slider";
import { useRouter } from "next/router";
import { top_10_arr } from "@/public/data/top_10";
import Details from "./components/Details";
import Similars from "./components/Similars";
import Map from "./components/Map";
import Box from "@mui/material/Box";
import Backdrops from "@/components/Backdrops";

export default () => {
	const { query } = useRouter();
	const singleItem = top_10_arr?.find((el) => Number(query?.id) === el?.id);

	return (
		<Layout>
			{singleItem && <Slider item={singleItem} />}
			<Details />
			<Box sx={{ width: "100vw", position: "relative", mb: "100px" }}>
				<Backdrops />
				{singleItem && <Map arr={[{ ...singleItem }]} height={544} />}
			</Box>
			<Similars />
		</Layout>
	);
};
