import Box from "@mui/material/Box";
import PhoneCheck from "./PhoneCheck";
import SignUp from "./SignUp";
import Success from "./Success";
import Sms from "./Sms";
import { useState } from "react";
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
	const [phone, setPhone] = useState<string>(""); // Specify the type as string
	const content = {
		phonecheck: <PhoneCheck {...{ setStep, setPhone }} />,
		sms: <Sms {...{ setStep, phone }} />,
		signup: <SignUp {...{ setStep }} />,
		success: <Success {...{ handleClose }} />
	};

	return <Box sx={{ width: "100%" }}>{content[step]}</Box>;
};
