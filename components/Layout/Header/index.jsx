import { Avatar, Box } from "@mui/material";
import SearchInput from "./components/SearchInput";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import DropDown from "./components/DropDown";
import { services_data } from "../../../public/data/services_data";
import Apartment from "@/public/icons/Apartment";
import { useRouter } from "next/router";

export default () => {
  const { pathname, push } = useRouter();
  const isHome = pathname === "/";
  return (
    <Box sx={{ bgcolor: isHome ? "transparent" : "warning.main" }}>
      <Box
        sx={{
          p: "10px 0px",
          position: isHome ? "absolute" : "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1300,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Avatar
            sx={{ bgcolor: "secondary.main", cursor: "pointer" }}
            aria-label="recipe"
            onClick={() => push("/")}
          >
            <Apartment />
          </Avatar>
          <SearchInput />
          <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="recipe">
            <AccountCircleIcon />
          </Avatar>
        </Box>
        <Box
          sx={{
            maxWidth: 670,
            mx: "auto",
            mt: 2,
            display: "flex",
            columnGap: 2,
          }}
        >
          {services_data?.map((el) => (
            <DropDown {...{ el }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
