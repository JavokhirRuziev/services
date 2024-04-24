import { theme } from "@/theme";
import { Box, Container, Link, Tooltip, Typography } from "@mui/material";
import { footer_links_arr } from "@/public/data/footer_data";
import TooltipClick from "../../Tooltips/TooltipClick";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Hover from "@/components/Buttons/Hover";

export default () => {
  // states  ///////////////////////////////////////////////////////////
  const [open, setOpen] = useState({ lang: false, countries: false });

  // functions  ///////////////////////////////////////////////////////////
  const handleTooltipClose = (action: string) => {
    setOpen({ ...open, [action as "lang" | "countries"]: false });
  };

  const handleTooltipOpen = (action: string) => {
    setOpen({ ...open, [action as "lang" | "countries"]: true });
  };

  // content  ///////////////////////////////////////////////////////////

  return (
    <Box sx={footerWrapper}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {footer_links_arr.map((el) => (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Title>{el?.title}</Title>
              {el?.children.map((el) => (
                <SubTitle>{el?.name}</SubTitle>
              ))}
            </Box>
          ))}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {actions_arr.map((el) => (
              <>
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
              </>
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

// styles  ///////////////////////////////////////////////////////////

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

// components  ///////////////////////////////////////////////////////////

const Title = ({ children }: any) => (
  <Typography
    variant="h6"
    color={"white"}
    letterSpacing={3}
    mb={2}
    fontWeight={"bold"}
  >
    {children}
  </Typography>
);

const SubTitle = ({ children, link }: { children: any; link?: string }) => (
  <Link
    {...(link && { href: link })}
    underline="hover"
    style={{ cursor: "pointer", marginBottom: "10px" }}
  >
    <Typography
      variant="body1"
      fontWeight={400}
      color={"white"}
      letterSpacing={2}
    >
      {children}
    </Typography>
  </Link>
);

// datas ///////////////////////////////////////////////////////////

const actions_arr = [
  {
    title: "Languages",
    children: "English",
    content: (
      <Box sx={tooltipContentStyles}>
        {["Русский", "English", "O'zbekcha"].map((el) => (
          <Hover>{el}</Hover>
        ))}
      </Box>
    ),
    action: "lang",
  },
  {
    title: "Countries",
    children: "United states",
    content: (
      <Box sx={tooltipContentStyles}>
        {["United states", "Brazil", "Uzbekistan", "India"].map((el) => (
          <Hover>{el}</Hover>
        ))}
      </Box>
    ),
    action: "countries",
  },
];
