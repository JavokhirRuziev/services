import { Button, Divider, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

const paperStyles = {
  display: "flex",
  alignItems: "center",
  maxWidth: 800,
  width: "100%",
  mx: "50px",
};
