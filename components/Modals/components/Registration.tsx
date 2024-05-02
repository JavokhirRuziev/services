import { Box, Divider, IconButton, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import PhoneCheck from "./PhoneCheck";
import SignUp from "./SignUp";
import Login from "./Login";
type StepType = "phonecheck" | "signup" | "login";

export default ({ step, setStep }: { step: StepType; setStep: any }) => {
	const handleGoBack = () => {
		setStep("phonecheck");
	};

	const content = {
		phonecheck: <PhoneCheck />,
		signup: <SignUp goBack={handleGoBack} />,
		login: <Login goBack={handleGoBack} />
	};

	return (
		<Box sx={{ px: 5, py: 2 }}>
			{content[step]}
			<Divider sx={{ mt: 4 }}>
				<Typography>Or</Typography>
			</Divider>
			<Box sx={bottomStyles}>
				<IconButton sx={{ mb: 4 }}>
					<GoogleIcon />
				</IconButton>
				<Image
					src={"/images/qrcode.png"}
					width={80}
					height={80}
					alt="qrcode"
				/>
				<Typography>Scan the QR code to download our App</Typography>
			</Box>
		</Box>
	);
};

const bottomStyles = {
	display: "flex",
	justifyContent: "center",
	mt: 2,
	flexDirection: "column",
	alignItems: "center",
	rowGap: 2
};
