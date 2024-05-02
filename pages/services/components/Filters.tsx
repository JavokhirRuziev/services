import {
	Box,
	Button,
	ButtonGroup,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography
} from "@mui/material";

export default () => {
	return (
		<Box sx={{ p: 3 }}>
			<Typography>Filters</Typography>
			<ButtonGroup variant="outlined" aria-label="Basic button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Label"
				/>
				<FormControlLabel
					required
					control={<Checkbox />}
					label="Required"
				/>
				<FormControlLabel
					disabled
					control={<Checkbox />}
					label="Disabled"
				/>
			</FormGroup>
			<ButtonGroup variant="outlined" aria-label="Basic button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Label"
				/>
				<FormControlLabel
					required
					control={<Checkbox />}
					label="Required"
				/>
				<FormControlLabel
					disabled
					control={<Checkbox />}
					label="Disabled"
				/>
			</FormGroup>
			<ButtonGroup variant="outlined" aria-label="Basic button group">
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox defaultChecked />}
					label="Label"
				/>
				<FormControlLabel
					required
					control={<Checkbox />}
					label="Required"
				/>
				<FormControlLabel
					disabled
					control={<Checkbox />}
					label="Disabled"
				/>
			</FormGroup>
		</Box>
	);
};
