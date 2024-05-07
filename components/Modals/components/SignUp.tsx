import { Formik, Field, Form } from "formik";
import FormikField from "@/components/TextFields/FormikField";
import {
<<<<<<< HEAD
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
=======
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Typography
>>>>>>> main
} from "@mui/material";
import BackButton from "@/components/Buttons/BackButton";

interface FormValues {
<<<<<<< HEAD
  phone?: string;
  code?: string;
  firstname?: string;
  lastname?: string;
}

export default ({ goBack }: any) => {
  return (
    <>
      <Typography variant="h3" textAlign={"center"} mb={5}>
        SignUp
      </Typography>
      <BackButton {...{ goBack }} />
      <Formik<FormValues>
        initialValues={{ phone: "", code: "", firstname: "", lastname: "" }}
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
          alert("working");
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <Field
                component={FormikField}
                type="phone"
                name="phone"
                placeholder="+998XX XXX XX XX"
              />
              <Box sx={{ display: "flex", columnGap: 1, width: "100%" }}>
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
              <Box sx={{ display: "flex", columnGap: 2 }}>
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
              </Box>
              <FormControlLabel
                control={<Checkbox defaultChecked color="secondary" />}
                label="By continuing, I accept the Terms of use Acceptable use policy Privacy policy and Cookie policy"
                sx={{ mb: 3, color: "grey.300" }}
              />
              <Button
                color="secondary"
                type="submit"
                fullWidth
                size="large"
                sx={{ mt: 1 }}
              >
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
=======
	phone?: string;
	code?: string;
	firstname?: string;
	lastname?: string;
}

export default ({ goBack }: any) => {
	return (
		<>
			<Typography variant="h3" textAlign={"center"} mb={5}>
				SignUp
			</Typography>
			<BackButton {...{ goBack }} />
			<Formik<FormValues>
				initialValues={{
					phone: "",
					code: "",
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
					alert("working");
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
							<Box sx={{ display: "flex", columnGap: 2 }}>
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
							</Box>
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										color="secondary"
									/>
								}
								label="By continuing, I accept the Terms of use Acceptable use policy Privacy policy and Cookie policy"
								sx={{ mb: 3, color: "grey.300" }}
							/>
							<Button
								color="secondary"
								type="submit"
								fullWidth
								size="large"
								sx={{ mt: 1 }}>
								Sign Up
							</Button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
>>>>>>> main
};
