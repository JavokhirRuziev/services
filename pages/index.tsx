import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";
import Universities from "@/components/Home/Universities";
import breakpoints from "utils/breakpoints";
import Properties from "@/components/Home/Properties";
import Budget from "@/components/Home/Budget";
import Releases from "@/components/Home/Releases";
import Specials from "@/components/Home/Specials";

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
