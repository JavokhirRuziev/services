import { Button, ButtonGroup, Divider, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  return (
    <Paper component="form" sx={paperStyles}>
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
  );
};

const paperStyles = {
  display: "flex",
  alignItems: "center",
  maxWidth: 600,
  width: "100%",
  mx: "50px",
};
