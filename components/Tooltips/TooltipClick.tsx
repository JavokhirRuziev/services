import breakpoints from "@/utils/breakpoints";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useEffect, useRef } from "react";

export default ({
	children,
	open,
	handleTooltipClose,
	content,
	placement
}: any) => {
	const { mobile } = breakpoints();

	const tooltipChildren = Array.isArray(children) ? (
		<div>{children}</div>
	) : (
		children
	);

	const tooltipRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleClickAway = (event: any) => {
			if (
				tooltipRef.current &&
				!tooltipRef.current.contains(event.target)
			) {
				setTimeout(() => {
					handleTooltipClose();
				}, 100);
			}
		};

		if (mobile && open) {
			document.addEventListener("mousedown", handleClickAway);
			return () => {
				document.removeEventListener("mousedown", handleClickAway);
			};
		}
	}, [mobile, open, handleTooltipClose]);

	return mobile ? (
		<Tooltip
			PopperProps={{ disablePortal: true }}
			open={open}
			disableFocusListener
			disableHoverListener
			disableTouchListener
			title={content}
			sx={{ maxWidth: 300 }}
			placement={placement || "bottom"}
			onClose={handleTooltipClose}
			ref={tooltipRef}>
			{tooltipChildren}
		</Tooltip>
	) : (
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
				placement={placement || "bottom"}>
				{tooltipChildren}
			</Tooltip>
		</ClickAwayListener>
	);
};
