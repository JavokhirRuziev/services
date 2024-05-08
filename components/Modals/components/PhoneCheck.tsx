import { Formik, Field, Form } from "formik";
import FormikField from "@/components/TextFields/FormikField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMutation, gql } from "@apollo/client";

const SEND_VERIFICATION_CODE = gql`
	mutation SendVerificationCode($phoneNumber: String!) {
		sendVerificationCode(phoneNumber: $phoneNumber)
	}
`;
interface FormValues {
	phone?: string;
}

export default () => {
	const [sendVerificationCode, { loading, error }] = useMutation(
		SEND_VERIFICATION_CODE
	);

	const handleSubmit = async (values: FormValues) => {
		await sendVerificationCode({
			variables: { phoneNumber: values.phone }
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Typography variant="h3" textAlign={"center"} mb={5}>
				LogIn/SignUp
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
				onSubmit={(values) => {
					handleSubmit(values);
				}}>
				{({ values }) => {
					return (
						<Form>
							<Field
								component={FormikField}
								type="phone"
								name="phone"
								placeholder="+998XX XXX XX XX"
							/>
							<Button
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}
								disabled={!Boolean(values.phone)}>
								Next
							</Button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
