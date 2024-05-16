import { Formik, Field, Form } from "formik";
import FormikField from "@/components/TextFields/FormikField";
import Typography from "@mui/material/Typography";
import { useMutation, gql } from "@apollo/client";
import ButtonGradient from "@/components/Buttons/ButtonGradient";
import CircularProgress from "@mui/material/CircularProgress";
import { theme } from "@/theme";
import { error, success } from "@/utils/notifications";

const SEND_VERIFICATION_CODE = gql`
	mutation SendVerificationCode($data: VerifyCodeInput!) {
		sendVerificationCode(data: $data)
	}
`;

type StepType = "phonecheck" | "signup" | "sms" | "success";

interface FormValues {
	phone?: string;
	code?: string;
}

type PhoneCheckTypes = {
	setStep: (step: StepType) => void;
	setPhone: (phone: string) => void;
};

export default ({ setStep, setPhone }: PhoneCheckTypes) => {
	const [sendVerificationCode] = useMutation(SEND_VERIFICATION_CODE);

	const handleSubmit = async (
		values: FormValues,
		setSubmitting: (isSubmitting: boolean) => void,
		setErrors: (phone: any) => void
	) => {
		setSubmitting(true);
		await sendVerificationCode({
			variables: { data: { phoneNumber: values.phone } }
		})
			.then((res) => {
				setSubmitting(false);
				setPhone(values.phone!);
				setStep("sms");
			})
			.catch((err) => {
				setSubmitting(false);
				// setErrors({ phone: err?.message });
				error(err?.message);
			});
	};

	return (
		<>
			<Typography variant="h2" textAlign={"center"} mb={4}>
				Login / Sign Up
			</Typography>
			<Formik<FormValues>
				initialValues={{ phone: "" }}
				validate={(values) => {
					const errors: FormValues = {};
					if (!values.phone) {
						errors.phone = "Required";
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting, setErrors }) => {
					handleSubmit(values, setSubmitting, setErrors);
				}}>
				{({ values, isSubmitting, handleChange }) => {
					return (
						<Form>
							<Typography variant="h4" mb={1}>
								Enter your phone number
							</Typography>
							<Typography
								variant="h5"
								mb={"30px"}
								color={"grey.600"}>
								We send the confirmation code via SMS
							</Typography>
							<Field
								component={FormikField}
								type="phone"
								name="phone"
								placeholder="+998XX XXX XX XX"
							/>
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
