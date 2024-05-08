import BackButton from "@/components/Buttons/BackButton";
import FormikField from "@/components/TextFields/FormikField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik, Field, Form } from "formik";

interface FormValues {
	phone?: string;
}

export default ({ goBack }: any) => {
	return (
		<>
			<Typography variant="h3" textAlign={"center"} mb={5}>
				LogIn
			</Typography>
			<BackButton {...{ goBack }} />
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
					alert("working");
				}}>
				{() => {
					return (
						<Form>
							<Field
								component={FormikField}
								type="text"
								name="phone"
								placeholder="+998XX XXX XX XX"
							/>
							<Box
								sx={{
									display: "flex",
									columnGap: 1,
									width: "100%"
								}}>
								<Field
									component={FormikField}
									type="number"
									name="code"
									placeholder="Verification code"
								/>
								<Box>
									<Button size="large" color="secondary">
										Send
									</Button>
								</Box>
							</Box>
							<Button
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}>
								Next
							</Button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};
