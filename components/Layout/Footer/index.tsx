import { theme } from "@/theme";
import { Box, Container, Link, Tooltip, Typography } from "@mui/material";
import { footer_links_arr } from "@/public/data/footer_data";
import TooltipClick from "../Header/components/TooltipClick";
import { useEffect, useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    console.log("asasass");
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

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
            <Title>Languages</Title>
            {/* <TooltipClick
              placement={"top"}
              {...{
                open,
                handleTooltipClose,
                content: <Box>"tooltipContent"</Box>,
              }}
            > */}
            <Tooltip title="workgin">
              <SubTitle onClick={handleTooltipOpen}>English</SubTitle>
            </Tooltip>
            {/* </TooltipClick> */}
            <Title>Countries</Title>
            <SubTitle>United States</SubTitle>
          </Box>
        </Box>
      </Container>
      <Box sx={bottomStyles}>
        <Typography
          variant="p"
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

const SubTitle = ({ children, link, onClick }: any) => (
  <Link
    href={link}
    underline="hover"
    style={{ cursor: "pointer", marginBottom: "10px" }}
    {...{ onClick }}
  >
    <Typography
      variant="p"
      fontWeight={400}
      color={"white"}
      letterSpacing={2}
      mb={3}
    >
      {children}
    </Typography>
  </Link>
);
