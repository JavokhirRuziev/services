import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import Registration from "./components/Registration";
import ButtonGradient from "../Buttons/ButtonGradient";
import Close from "@/public/icons/Close";
import WelcomeBanner from "./components/WelcomeBanner";
import Typography from "@mui/material/Typography";
import Image from "next/image";
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
	const [step, setStep] = React.useState<
		"phonecheck" | "signup" | "sms" | "success"
	>("phonecheck");

	return (
		<>
			<ButtonGradient onClick={handleOpen}>LogIn</ButtonGradient>
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
					<Box sx={modalStyles}>
						<Box sx={{ display: "flex", width: "100%" }}>
							<Box sx={closeIconStyles} onClick={handleClose}>
								<Close />
							</Box>
							<Box sx={bannerWrapperStyles}>
								<Box sx={textWrapperStyles}>
									<Box position={"relative"}>
										<WelcomeBanner />
										<Typography
											variant="body1"
											color={"common.white"}
											sx={textStyles}>
											Welcome to CityShahar.uz
										</Typography>
									</Box>
								</Box>
								<Box sx={imageStyles}>
									<Image
										src={"/images/greeting-human.png"}
										fill
										style={{ objectFit: "cover" }}
										alt="greeting-human"
									/>
								</Box>
							</Box>
							<Box sx={contentWrapperStyles}>
								<Registration
									{...{ step, setStep, handleClose }}
								/>
							</Box>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}

const modalStyles = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: 745,
	bgcolor: "background.paper",
	boxShadow: 24,
	width: "100%",
	borderRadius: "12px",
	overflowY: "auto",
	display: "flex"
};

const closeIconStyles = {
	position: "absolute",
	top: 15,
	right: 15,
	cursor: "pointer"
};

const bannerWrapperStyles = {
	maxWidth: 260,
	width: "100%",
	background: "linear-gradient(#A0DAFB, #0A8ED9)",
	position: "relative"
};

const textWrapperStyles = {
	position: "absolute",
	top: 90,
	left: 26
};

const textStyles = {
	position: "absolute",
	top: 20,
	left: 25
};

const contentWrapperStyles = {
	p: "70px 30px",
	maxWidth: 486,
	width: "100%"
};

const imageStyles = {
	position: "absolute",
	maxWidth: 196,
	width: "100%",
	maxHeight: 216,
	height: "100%",
	top: 200,
	left: 40
};
