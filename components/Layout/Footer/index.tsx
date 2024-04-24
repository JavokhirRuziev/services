import { theme } from "@/theme";
import { Box, Container, Link, Tooltip, Typography } from "@mui/material";
import { footer_links_arr } from "@/public/data/footer_data";
import TooltipClick from "../../Tooltips/TooltipClick";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hover from "@/components/Buttons/Hover";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

export default () => {
  const [open, setOpen] = useState({ lang: false, countries: false });
  const [selectedState, setSelectedState] = useState({
    lang: "English",
    countries: "United states",
  });

  const handleSetState = (key: string, value: string) => {
    setSelectedState({ ...selectedState, [key]: value });
  };

  const actions_arr = [
    {
      title: "Languages",
      children: selectedState["lang"],
      content: (
        <Box sx={tooltipContentStyles}>
          {["Русский", "English", "O'zbekcha"].map((el) => (
            <Hover onClick={() => handleSetState("lang", el)} key={el}>
              {el}
            </Hover>
          ))}
        </Box>
      ),
      action: "lang",
    },
    {
      title: "Countries",
      children: selectedState["countries"],
      content: (
        <Box sx={tooltipContentStyles}>
          {["United states", "Brazil", "Uzbekistan", "India"].map((el) => (
            <Hover onClick={() => handleSetState("countries", el)} key={el}>
              {el}
            </Hover>
          ))}
        </Box>
      ),
      action: "countries",
    },
  ];

  const handleTooltipClose = (action: string) => {
    setOpen({ ...open, [action as "lang" | "countries"]: false });
  };

  const handleTooltipOpen = (action: string) => {
    setOpen({ ...open, [action as "lang" | "countries"]: true });
  };

  return (
    <Box sx={footerWrapper}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {footer_links_arr.map((el) => (
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              key={el?.title}
            >
              <Title>{el?.title}</Title>
              {el?.children.map((el) => (
                <Subtitle key={el?.name}>{el?.name}</Subtitle>
              ))}
            </Box>
          ))}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {actions_arr.map((el) => (
              <React.Fragment key={el.title}>
                <Title>{el.title}</Title>
                <TooltipClick
                  placement={"top"}
                  {...{
                    open: open && open[el.action as keyof typeof open],
                    handleTooltipClose: () => handleTooltipClose(el.action),
                    content: el.content,
                  }}
                >
                  <Link
                    underline="hover"
                    style={{
                      cursor: "pointer",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={() => handleTooltipOpen(el.action)}
                  >
                    <Typography
                      variant="body1"
                      fontWeight={400}
                      color={"white"}
                      letterSpacing={2}
                    >
                      {el.children}
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ color: "white" }} />
                  </Link>
                </TooltipClick>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
      <Box sx={bottomStyles}>
        <Typography
          variant="body1"
          color={"white"}
          fontWeight={"bold"}
          letterSpacing={2}
        >
          Copyright © 2004–2024 SolveMe
        </Typography>
      </Box>
    </Box>
  );
};

const tooltipContentStyles = {
  width: 200,
  display: "flex",
  flexDirection: "column",
  rowGap: 1,
  p: 1,
};

const footerWrapper = {
  bgcolor: "secondary.main",
  padding: "50px 0px 0px",
  margin: "50px 0px 0px",
};

const bottomStyles = {
  display: "flex",
  justifyContent: "center",
  boxShadow: theme.shadows[1],
  p: 2,
  mt: 6.5,
  bgcolor: "secondary.main",
};
