import { ClickAwayListener, Tooltip } from "@mui/material";

export default ({
  children,
  open,
  handleTooltipClose,
  content,
  placement,
}: any) => {
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
        {children}
      </Tooltip>
    </ClickAwayListener>
  );
};
