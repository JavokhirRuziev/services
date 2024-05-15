import Box from "@mui/material/Box";
import PhoneCheck from "./PhoneCheck";
import SignUp from "./SignUp";
import Success from "./Success";
import Sms from "./Sms";
type StepType = "phonecheck" | "signup" | "sms" | "success";

export default ({
	step,
	setStep,
	handleClose
}: {
	step: StepType;
	setStep: any;
	handleClose: () => void;
}) => {
	const content = {
		phonecheck: <PhoneCheck {...{ setStep }} />,
		sms: <Sms {...{ setStep }} />,
		signup: <SignUp {...{ setStep }} />,
		success: <Success {...{ handleClose }} />
	};

	return <Box>{content[step]}</Box>;
};
