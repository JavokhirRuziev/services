import Layout from "@/components/Layout";
import { Box } from "@mui/material";
import Map from "./components/Map";
import { top_10_arr } from "@/public/data/top_10";
import Card from "./components/Card";
import Filters from "./components/Filters";

export default () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "250px 800px 1fr",
        }}
      >
        <Filters />
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

const cardWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  p: 3,
  overflow: "scroll",
  height: "100vh",
  scrollbarWidth: "none",
};
