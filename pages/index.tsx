import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";
import Popular from "@/components/Home/Popular";
import Universities from "@/components/Home/Universities";

// role generic

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Popular />
      <Universities />
      <Suggestions />
    </Layout>
  );
}
