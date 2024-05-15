import { theme } from "@/theme";
import TextField from "@mui/material/TextField";

export default ({
	sx,
	value,
	onChange,
	type,
	placeholder
}: {
	sx?: any;
	value: any;
	onChange: any;
	type: string;
	placeholder: string;
}) => {
	return (
		<TextField
			fullWidth
			{...{ value, onChange, type, placeholder }}
			sx={{
				"& .MuiOutlinedInput-root": {
					fontSize: 18,
					borderRadius: "4px",
					color: "common.black",
					bgcolor: "common.white",
					p: 0,
					"&:hover": {
						bgcolor: "grey.100",
						border: "none",
						fieldset: {
							border: "1px solid",
							borderColor: "grey.400"
						}
					},
					fieldset: {
						borderColor: "grey.400",
						border: `1px solid ${theme.palette.grey[400]}`
					},
					"&.Mui-focused fieldset": {
						border: "1.5px solid",
						borderColor: "grey.400",
						zIndex: 2
					},
					"&.Mui-focused": {
						bgcolor: "grey.100"
					}
				},
				"& .MuiOutlinedInput-input": {
					height: "auto",
					p: "15px",
					borderRadius: "4px",
					"&::placeholder": {
						color: "grey.400",
						fontSize: 18,
						opacity: 1
					}
				},
				...sx
			}}
		/>
	);
};
