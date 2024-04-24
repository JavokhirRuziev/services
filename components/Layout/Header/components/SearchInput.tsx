import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DropDown from "./DropDown";
import { services_data } from "@/public/data/services_data";

export default () => {
  return (
    <Box sx={Wrapper}>
      <Paper component="form">
        <ButtonGroup fullWidth>
          <InputBase fullWidth placeholder="Categories" sx={{ ml: 2 }} />
          <Divider orientation="vertical" sx={{ height: 28, margin: 0.5 }} />
          <InputBase fullWidth placeholder="Location" sx={{ ml: 2 }} />
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            sx={{ maxWidth: 50 }}
          >
            <SearchIcon
              sx={{
                color: "primary.contrastText",
                height: "100%",
              }}
            />
          </Button>
        </ButtonGroup>
      </Paper>
      <Box sx={dropDownWrapperStyles}>
        {services_data?.map((el) => (
          <DropDown {...{ el, isHome: true }} />
        ))}
      </Box>
    </Box>
  );
};

const Wrapper = {
  position: "relative",
  mx: "50px",
  maxWidth: 600,
  width: "100%",
};

const dropDownWrapperStyles = {
  mt: "10px",
  ml: "10px",
  display: "flex",
  columnGap: 2,
  position: "absolute",
};
