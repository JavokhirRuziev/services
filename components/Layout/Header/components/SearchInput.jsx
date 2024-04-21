import { Button, Divider, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { paperStyles } from "./styles";

export default () => {
  return (
    <Paper component="form" sx={paperStyles}>
      <InputBase fullWidth placeholder="Categories" sx={{ ml: 2 }} />
      <Divider orientation="vertical" sx={{ height: 28, margin: 0.5 }} />
      <InputBase fullWidth placeholder="Location" sx={{ ml: 2 }} />
      <Button size="medium" variant="contained" color="secondary">
        <SearchIcon sx={{ color: "primary.contrastText", height: "100%" }} />
      </Button>
    </Paper>
  );
};
