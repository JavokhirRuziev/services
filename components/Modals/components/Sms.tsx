import { Formik, Field, Form } from "formik";
import FormikField from "@/components/TextFields/FormikField";
import Typography from "@mui/material/Typography";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import ButtonGradient from "@/components/Buttons/ButtonGradient";
import CircularProgress from "@mui/material/CircularProgress";
import OtpInput from "react-otp-input";
import { theme } from "@/theme";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

const VERIFY_CODE = gql`
	mutation VerifyCode($data: VerifyCodeInput!) {
		verifyCode(data: $data) {
			approved
			exists
			accessToken
		}
	}
`;
type StepType = "phonecheck" | "signup" | "sms" | "success";
interface FormValues {
	phone?: string;
	code?: string;
}

type PhoneCheckTypes = {
	setStep: (step: StepType) => void;
};

export default ({ setStep }: PhoneCheckTypes) => {
	const { query } = useRouter();
	const [VerifyCode] = useMutation(VERIFY_CODE);

	const handleSubmit = async (
		values: FormValues,
		setSubmitting: (isSubmitting: boolean) => void
	) => {
		setSubmitting(true);

		await VerifyCode({
			variables: {
				data: {
					phoneNumber: query?.phone,
					code: values.code
				}
			}
		})
			.then((res) => {
				setSubmitting(false);
				console.log(res);
				setStep("signup");
			})
			.catch((err) => {
				setSubmitting(false);
				console.log(err);
				setStep("signup");
			});
	};

	return (
		<>
			<Typography variant="h2" textAlign={"center"} mb={4}>
				Login / Sign Up
			</Typography>
			<Formik<FormValues>
				initialValues={{ code: "" }}
				validate={(values) => {
					const errors: FormValues = {};
					if (!values?.code) {
						errors.phone = "Required";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values, setSubmitting);
				}}>
				{({ values, isSubmitting, handleChange }) => {
					return (
						<Form>
							<Typography variant="h4" mb={1}>
								Enter the code
							</Typography>
							<Typography
								variant="h5"
								mb={"30px"}
								color={"grey.600"}>
								{`To confirm the phone number, the 5-digit code was sent to ${query?.phone}`}
							</Typography>
							<Box sx={otpWrapperStyles}>
								<OtpInput
									inputStyle={otpInputStyles}
									inputType="number"
									value={values.code}
									onChange={(code) =>
										handleChange({
											target: {
												name: "code",
												value: code
											}
										})
									}
									numInputs={6}
									renderSeparator={
										<span>&nbsp;&nbsp;&nbsp;</span>
									}
									renderInput={(props) => (
										<input name="code" {...props} />
									)}
								/>
							</Box>

							<ButtonGradient
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}
								disabled={!Boolean(values.phone)}>
								{isSubmitting ? (
									<CircularProgress color="info" />
								) : (
									"Next"
								)}
							</ButtonGradient>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

const otpInputStyles = {
	borderRadius: "5px",
	padding: "15px 15px",
	border: `1px solid ${theme.palette.grey[400]}`,
	background: theme.palette.grey[100]
};

const otpWrapperStyles = {
	display: "flex",
	justifyContent: "center",
	mb: "50px"
};
