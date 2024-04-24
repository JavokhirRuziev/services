import { Box, Typography } from "@mui/material";

export default ({ children, text, onClick, variant }: any) => {
  return (
    <Box sx={wrapperStyles} {...{ onClick }}>
      {children && children}
      <Typography variant={variant || "body1"} whiteSpace={"nowrap"}>
        {text}
      </Typography>
    </Box>
  );
};

const wrapperStyles = {
  display: "flex",
  columnGap: "5px",
  padding: "8px",
  borderRadius: "4px",
  alignItems: "center",
  opacity: 0.8,
  cursor: "pointer",

  "&:hover": {
    bgcolor: "secondary.light",
  },
};
