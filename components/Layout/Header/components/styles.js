export const headerWrapperStyles = (isHome) => ({
  bgcolor: isHome ? "transparent" : "warning.main",
});

export const headerContainerStyles = (isHome) => ({
  p: "10px 0px",
  position: isHome ? "absolute" : "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: 1300,
  left: "50%",
  transform: "translateX(-50%)",
});

export const dropDownWrapperStyles = {
  maxWidth: 670,
  mx: "auto",
  mt: 2,
  display: "flex",
  columnGap: 2,
};
export const dropDownContainerStyles = {
  "&:hover .categories": {
    display: "flex",
  },

  ".categories": {
    display: "none",
    position: "absolute",
    left: "0px",
    width: "350px",
  },

  cursor: "pointer",
  position: "relative",
};

export const gridItemWrapper = {
  display: "flex",
  columnGap: "5px",
  padding: "8px",
  borderRadius: "4px",

  "&:hover": {
    bgcolor: "warning.main",
  },
};

export const paperStyles = {
  display: "flex",
  alignItems: "center",
  maxWidth: 800,
  width: "100%",
  mx: "50px",
};
