import { Avatar, Box, Typography } from "@mui/material";
import SearchInput from "./components/SearchInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import DropDown from "./components/DropDown";
import { services_data } from "../../../public/data/services_data";
import { useRouter } from "next/router";
import Link from "next/link";
import FitbitIcon from "@mui/icons-material/Fitbit";

export default () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  return (
    <Box
      sx={{
        bgcolor: isHome ? "transparent" : "white",
        borderBottom: "1px solid lightgray",
      }}
    >
      <Box sx={headerContainerStyles(isHome)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link href={"/"} style={logoStyles}>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              color={isHome ? "white" : "black"}
            >
              SolveMe
            </Typography>
            <FitbitIcon sx={{ color: isHome ? "white" : "black" }} />
          </Link>
          <SearchInput />
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
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
const headerContainerStyles = (isHome) => ({
  p: "10px 0px",
  position: isHome ? "absolute" : "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: 1300,
  left: "50%",
  transform: "translateX(-50%)",
});

const dropDownWrapperStyles = {
  maxWidth: 670,
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
