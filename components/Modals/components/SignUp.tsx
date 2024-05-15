import { Formik, Field, Form } from "formik";
import FormikField from "@/components/TextFields/FormikField";
import Typography from "@mui/material/Typography";
import ButtonGradient from "@/components/Buttons/ButtonGradient";

interface FormValues {
	phone?: string;
	firstname?: string;
	lastname?: string;
}
type PhoneCheckTypes = {
	setStep: (step: StepType) => void;
};

type StepType = "phonecheck" | "signup" | "sms" | "success";

export default ({ setStep }: PhoneCheckTypes) => {
	return (
		<>
			<Typography variant="h3" textAlign={"center"} mb={5}>
				SignUp
			</Typography>
			<Formik<FormValues>
				initialValues={{
					phone: "",
					firstname: "",
					lastname: ""
				}}
				validate={(values) => {
					const errors: FormValues = {};
					for (const key in values) {
						if (!values[key as keyof FormValues]) {
							errors[key as keyof FormValues] = "Required";
						}
					}
					return errors;
				}}
				onSubmit={(values) => {
					setStep("success");
				}}>
				{({}) => {
					return (
						<Form>
							<Field
								component={FormikField}
								type="phone"
								name="phone"
								placeholder="+998XX XXX XX XX"
							/>
							<Field
								component={FormikField}
								type="text"
								name="firstname"
								placeholder="First name"
							/>
							<Field
								component={FormikField}
								type="text"
								name="lastname"
								placeholder="Last name"
							/>
							<ButtonGradient
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}>
								Sign Up
							</ButtonGradient>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
