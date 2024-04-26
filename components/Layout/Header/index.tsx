import { Box, Typography } from "@mui/material";
import SearchInput from "./components/SearchInput";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/public/icons/Logo";
import { rightBlockArr } from "./components/data";

export default () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={headerWrapperStyles(isHome)} data-testid="header-component">
      <Box sx={headerContainerStyles(isHome)}>
        <Box sx={headerAppbarWrapperStyles}>
          <Link href={"/"} style={logoStyles}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              color={isHome ? "white" : "black"}
            >
              SolveMe
            </Typography>
            <Logo color={isHome ? "white" : "black"} />
          </Link>
          <SearchInput />
          <Box
            sx={{
              display: "flex",
              columnGap: 2,
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
            data-testid="right-block-element"
          >
            {rightBlockArr({ open, handleTooltipClose, handleTooltipOpen }).map(
              (el, index) => (
                <React.Fragment key={index}>{el}</React.Fragment>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const headerContainerStyles = (isHome: boolean) => ({
  p: "20px 0px",
  position: isHome ? "absolute" : "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: 1300,
  left: "50%",
  transform: "translateX(-50%)",
});

const logoStyles = {
  textDecoration: "none",
  color: "white",
  display: "flex",
  columnGap: "10px",
};

const headerAppbarWrapperStyles = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const headerWrapperStyles = (isHome: boolean) => ({
  bgcolor: isHome ? "transparent" : "white",
  borderBottom: "1px solid lightgray",
});
