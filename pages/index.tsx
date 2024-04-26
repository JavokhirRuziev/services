import Suggestions from "@/components/Home/Suggestions";
import Layout from "@/components/Layout";
import Slider from "@/components/Home/Slider";
import Popular from "@/components/Home/Popular";
import { Divider } from "@mui/material";
import breakpoints from "utils/breakpoints";

export default function Home() {
  const { mobile, tablet } = breakpoints();

  return (
    <Layout>
      {!mobile && !tablet && <Slider />}
      <Popular />
      <Divider
        sx={{
          bgcolor: "grey.400",
          height: { mobile: 50, tablet: 75, desktop: 100 },
        }}
      />
      <Suggestions />
    </Layout>
  );
}
