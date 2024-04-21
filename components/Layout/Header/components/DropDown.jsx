import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { dropDownContainerStyles } from "./styles";
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
