import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";
<<<<<<< HEAD
import Popular from "@/components/Home/Popular";
import { Box, Divider } from "@mui/material";
import breakpoints from "utils/breakpoints";
import Image from "next/image";
=======
import Universities from "@/components/Home/Universities";
import { Divider } from "@mui/material";
import breakpoints from "utils/breakpoints";
import Properties from "@/components/Home/Properties";
import Budget from "@/components/Home/Budget";
import Releases from "@/components/Home/Releases";
import Specials from "@/components/Home/Specials";
>>>>>>> main

export default function Home() {
	const { mobile, tablet } = breakpoints();

	return (
		<Layout>
			{!mobile && !tablet && <Slider />}
			<Universities />
			<Properties />
			<Budget />
			<Releases />
			<Specials />
		</Layout>
	);
}
