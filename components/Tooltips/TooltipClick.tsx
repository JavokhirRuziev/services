import { ClickAwayListener, Tooltip } from "@mui/material";

export default ({
  children,
  open,
  handleTooltipClose,
  content,
  placement,
}: any) => {
  // Wrap children in a div if it's an array
  const tooltipChildren = Array.isArray(children) ? (
    <div>{children}</div>
  ) : (
    children
  );

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{ disablePortal: true }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={content}
        sx={{ maxWidth: 300 }}
        placement={placement || "bottom"}
      >
        {tooltipChildren}
      </Tooltip>
    </ClickAwayListener>
  );
};
