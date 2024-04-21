import Layout from "@/components/Layout";
import { Box } from "@mui/material";
import Map from "./components/Map";
import { top_10_arr } from "@/public/data/top_10";
import Card from "./components/Card";
import { cardWrapperStyles } from "./components/styles";

export default () => {
  return (
    <Layout>
      <Box sx={{ display: "grid", gridTemplateColumns: "250px 800px 1fr" }}>
        <Box>filters</Box>
        <Box sx={cardWrapperStyles}>
          {top_10_arr.map((el) => (
            <Card {...{ el }} />
          ))}
        </Box>
        <Map />
      </Box>
    </Layout>
  );
};