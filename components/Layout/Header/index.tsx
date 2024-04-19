import { Avatar, Box } from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SearchInput from "./components/SearchInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", p: "10px 0px" }}
    >
      <Avatar sx={{ bgcolor: "warning" }} aria-label="recipe">
        <LogoDevIcon />
      </Avatar>
      <SearchInput />
      <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="recipe">
        <AccountCircleIcon />
      </Avatar>
    </Box>
  );
};
