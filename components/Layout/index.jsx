import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

export default ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
