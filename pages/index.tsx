import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";
import Popular from "@/components/Home/Popular";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <Popular />
      <Divider sx={{ bgcolor: "grey.400", height: 100 }} />
      <Suggestions />
    </Layout>
  );
}
