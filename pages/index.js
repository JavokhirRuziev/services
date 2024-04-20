import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import HomeSlider from "@/components/Sliders/HomeSlider";

export default function HomePage() {
  return (
    <Layout>
      <HomeSlider />
      <Suggestions />
    </Layout>
  );
}
