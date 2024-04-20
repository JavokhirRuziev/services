import { Box, Typography } from "@mui/material";
import BasicTable from "./Table";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDown = ({ el }) => {
  return (
    <Box
      sx={{
        "&:hover .categories": {
          display: "flex",
        },

        ".categories": {
          display: "none",
          position: "absolute",
          left: "0px",
          width: "350px",
        },

        cursor: "pointer",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="p" color="white">
          {el?.name}
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "white" }} />
      </Box>
      <Box className="categories">
        <BasicTable category={el?.category} />
      </Box>
    </Box>
  );
};

export default DropDown;
