import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import Typography from "@mui/material/Typography";
import Registration from "./components/Registration";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import Logo from "@/public/icons/Logo";
import ButtonGradient from "../Buttons/ButtonGradient";
interface FadeProps {
	children: React.ReactElement;
	in?: boolean;
	onClick?: any;
	onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
	onExited?: (node: HTMLElement, isAppearing: boolean) => void;
	ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
	props,
	ref
) {
	const {
		children,
		in: open,
		onClick,
		onEnter,
		onExited,
		ownerState,
		...other
	} = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter(null as any, true);
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited(null as any, true);
			}
		}
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{React.cloneElement(children, { onClick })}
		</animated.div>
	);
});

export default function AuthModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [step, setStep] = React.useState<"phonecheck" | "signup" | "login">(
		"phonecheck"
	);

	return (
		<>
			<ButtonGradient onClick={handleOpen}>LogIn / SignUp</ButtonGradient>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						TransitionComponent: Fade
					}
				}}>
				<Fade in={open}>
					<Box sx={modalStyles(step)}>
						<Box sx={leftBlockStyles}>
							<ChatBubbleRoundedIcon sx={iconStyles} />
							<Typography
								component={"div"}
								sx={welcomeTextStyles}>
								Welcome to Solve Me!
								<Logo />
							</Typography>
						</Box>
						<Box sx={{ p: 4, width: "70%" }}>
							<Registration {...{ step, setStep }} />
						</Box>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}

const modalStyles = (step: string) => ({
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: 800,
	bgcolor: "background.paper",
	boxShadow: 24,
	width: "100%",
	borderRadius: "4px",
	overflowY: "auto",
	maxHeight: step === "signup" ? 900 : 700,
	display: "flex",
	height: "100%"
});

const leftBlockStyles = {
	bgcolor: "secondary.main",
	width: "30%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "sticky",
	borderRadius: "4px 0px 0px 4px",
	top: 0
};

const welcomeTextStyles = {
	mb: 3,
	width: 150,
	position: "absolute",
	color: "white",
	textAlign: "center",
	fontSize: "22px !important",
	display: "flex",
	alignItems: "center",
	flexDirection: "column"
};

const iconStyles = {
	width: 200,
	height: 200,
	color: "secondary.light"
};
