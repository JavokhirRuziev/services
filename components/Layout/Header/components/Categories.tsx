import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

type categoryTypes = {
  category: { name: string; icon: JSX.Element }[];
};

export default function Categories({ category }: categoryTypes) {
  const { push } = useRouter();
  const handleGo = () => push("/services");
  return (
    <Paper
      sx={{
        background: "white",
        padding: "10px",
        borderTopLeftRadius: 0,
        display: "grid", // Change display to grid
        gridAutoRows: "min-content", // Automatically size rows based on content
        gridRowGap: "8px", // Adjust spacing between rows
        gridTemplateColumns: "1fr 1fr", // Adjust column size and layout
        maxHeight: 180,
        width: "100%",
        height: "100%",
      }}
    >
      {category?.map((el, index) => (
        <Box key={index} onClick={handleGo}>
          <Box sx={gridItemWrapper}>
            {el?.icon}
            <Typography variant="custom" whiteSpace={"nowrap"}>
              {el?.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}

const gridItemWrapper = {
  display: "flex",
  columnGap: "5px",
  padding: "8px",
  borderRadius: "4px",
  alignItems: "center",

  "&:hover": {
    bgcolor: "secondary.light",
  },
  opacity: 0.8,
};
