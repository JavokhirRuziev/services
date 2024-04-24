import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import SearchInput from "./components/SearchInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import DropDown from "./components/DropDown";
import { services_data } from "../../../public/data/services_data";
import { useRouter } from "next/router";
import Link from "next/link";
import TooltipClick from "../../Tooltips/TooltipClick";
import Logo from "@/public/icons/Logo";
import Hover from "@/components/Buttons/Hover";
import Business from "@/public/icons/Business";
import Check from "@/public/icons/Check";
import LogIn from "@/public/icons/LogIn";
import Account from "@/public/icons/Account";

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

  const rightBlockArr = [
    // <TooltipClick {...{ open, handleTooltipClose, content: tooltipContent }}>
    //   <Button variant="outlined" color="secondary" onClick={handleTooltipOpen}>
    //     SolveMe for Bussiness
    //     <KeyboardArrowDownIcon sx={{ color: "inherit" }} />
    //   </Button>
    // </TooltipClick>,

    // <Button variant="outlined" color="secondary">
    //   Write a Review
    // </Button>,
    <Avatar sx={{ bgcolor: "secondary.main" }}>
      <Account />
    </Avatar>,
    <Button variant="outlined" color="secondary">
      Log In
    </Button>,
    <Button variant="contained" color="secondary">
      Sign Up
    </Button>,
  ];

  return (
    <Box sx={headerWrapperStyles(isHome)}>
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
          >
            {rightBlockArr.map((el) => el)}
          </Box>
        </Box>
        <Box sx={dropDownWrapperStyles}>
          {services_data?.map((el) => (
            <DropDown {...{ el, isHome }} />
          ))}
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

const dropDownWrapperStyles = {
  maxWidth: 950,
  mx: "auto",
  mt: "10px",
  display: "flex",
  columnGap: 2,
};

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

const tooltipContent = (
  <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
    <Hover text={"Add a Bussiness"}>
      <Business />
    </Hover>
    <Hover text={"Claim our Bussiness"}>
      <Check />
    </Hover>
    <Hover text={"Log in to Bussiness Account"}>
      <LogIn />
    </Hover>
    <Divider />
    <Hover text={"Explore SolveMe for Bussiness"}>
      <Logo color="inherit" />
    </Hover>
  </Box>
);
