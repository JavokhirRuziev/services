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
					fontSize: 16,
					borderRadius: "4px",
					color: "common.black",
					bgcolor: "common.white",
					p: 0,
					"&:hover": {
						bgcolor: "grey.100",
						border: "none",
						fieldset: {
							border: "1px solid",
							borderColor: "secondary.main"
						}
					},
					fieldset: {
						borderColor: "secondary.main",
						border: `1px solid ${theme.palette.secondary.main}`
					},
					"&.Mui-focused fieldset": {
						// transition: "0.3s",
						border: "2px solid",
						borderColor: "secondary.main",
						zIndex: 2
					},
					"&.Mui-focused": {
						bgcolor: "grey.100"
					}
				},
				"& .MuiOutlinedInput-input": {
					height: "auto",
					p: 1.2,
					borderRadius: "4px",
					"&::placeholder": {
						color: "grey.400",
						fontSize: 16,
						opacity: 1
					}
				},
				...sx
			}}
		/>
	);
};
