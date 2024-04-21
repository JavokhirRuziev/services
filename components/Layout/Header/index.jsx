import { Avatar, Box } from "@mui/material";
import SearchInput from "./components/SearchInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import DropDown from "./components/DropDown";
import { services_data } from "../../../public/data/services_data";
import Apartment from "@/public/icons/Apartment";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  return (
    <Box sx={{ bgcolor: isHome ? "transparent" : "warning.main" }}>
      <Box sx={headerContainerStyles(isHome)}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link href={"/"}>
            <Avatar sx={{ bgcolor: "secondary.main", cursor: "pointer" }}>
              <Apartment />
            </Avatar>
          </Link>
          <SearchInput />
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <AccountCircleIcon />
          </Avatar>
        </Box>
        <Box sx={dropDownWrapperStyles}>
          {services_data?.map((el) => (
            <DropDown {...{ el }} />
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
  mt: 2,
  display: "flex",
  columnGap: 2,
};
