import { Avatar, Box } from "@mui/material";
import SearchInput from "./components/SearchInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import DropDown from "./components/DropDown";
import { services_data } from "../../../public/data/services_data";
import Apartment from "@/public/icons/Apartment";
import { useRouter } from "next/router";
import {
  dropDownWrapperStyles,
  headerContainerStyles,
  headerWrapperStyles,
} from "./components/styles";
import Link from "next/link";

export default () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";
  return (
    <Box sx={headerWrapperStyles(isHome)}>
      <Box sx={headerContainerStyles(isHome)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
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
