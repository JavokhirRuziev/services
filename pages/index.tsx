import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Suggestions />
    </Layout>
  );
}
