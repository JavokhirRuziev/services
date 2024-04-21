import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Categories from "./Categories";

const DropDown = ({ el }) => {
  return (
    <Box sx={dropDownContainerStyles}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="p" color="white">
          {el?.name}
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "white" }} />
      </Box>
      <Box className="categories">
        <Categories category={el?.category} />
      </Box>
    </Box>
  );
};

export default DropDown;

const dropDownContainerStyles = {
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
};
