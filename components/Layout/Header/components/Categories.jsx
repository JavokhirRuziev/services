import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function Categories({ category }) {
  const { push } = useRouter();
  const handleGo = () => push("/services");
  return (
    <Paper sx={{ background: "white", padding: "10px", mt: "20px" }}>
      <Grid container spacing={1}>
        {category?.map((el, index) => (
          <Grid
            item
            desktop={6}
            tablet={6}
            mobile={6}
            key={index}
            onClick={handleGo}
          >
            <Box sx={gridItemWrapper}>
              {el?.icon}
              <Typography variant="p">{el?.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

const gridItemWrapper = {
  display: "flex",
  columnGap: "5px",
  padding: "8px",
  borderRadius: "4px",

  "&:hover": {
    bgcolor: "warning.main",
  },
};
