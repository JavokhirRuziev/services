import { Formik, Form } from "formik";
import Typography from "@mui/material/Typography";
import { useMutation, gql } from "@apollo/client";
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
			accessToken
			user {
				id
			}
		}
	}
`;
type StepType = "phonecheck" | "signup" | "sms" | "success";
interface FormValues {
	code?: string;
}

type PhoneCheckTypes = {
	setStep: (step: StepType) => void;
	phone: string;
};

export default ({ setStep, phone }: PhoneCheckTypes) => {
	const { query } = useRouter();
	const [VerifyCode] = useMutation(VERIFY_CODE);

	const handleSubmit = async (
		values: FormValues,
		setSubmitting: (isSubmitting: boolean) => void,
		setErrors: (code: object) => void
	) => {
		setSubmitting(true);

		await VerifyCode({
			variables: {
				data: {
					phoneNumber: phone,
					code: values.code
				}
			}
		})
			.then((res) => {
				setSubmitting(false);
				if (Number(res?.extensions?.code) > 205) {
				} else {
					setStep("signup");
				}
			})
			.catch((err) => {
				setSubmitting(false);
				// setErrors({ code: err?.message });
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
						errors.code = "Required!";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting, setErrors }) => {
					handleSubmit(values, setSubmitting, setErrors);
				}}>
				{({ values, isSubmitting, handleChange, touched, errors }) => {
					console.log(errors);

					return (
						<Form>
							<Typography variant="h4" mb={1}>
								Enter the code
							</Typography>
							<Typography
								variant="h5"
								mb={"30px"}
								color={"grey.600"}>
								{`To confirm the phone number, the 5-digit code was sent to ${phone}`}
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
									numInputs={4}
									renderSeparator={
										<span>&nbsp;&nbsp;&nbsp;</span>
									}
									renderInput={(props) => (
										<input name="code" {...props} />
									)}
								/>
								{touched["code"] && errors["code"] && (
									<Typography sx={validationTextStyles}>
										{errors?.code}
									</Typography>
								)}
							</Box>

							<ButtonGradient
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}
								disabled={!Boolean(values.code)}>
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
	mb: "50px",
	position: "relative"
};

const validationTextStyles = {
	position: "absolute",
	bottom: -25,
	color: "error.main",
	transition: "0.3s"
};
