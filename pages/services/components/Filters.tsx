import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default () => {
	return (
		<Box sx={wrapperStyles}>
			<Typography variant="h4" mb={4}>
				Filters
			</Typography>
			<Typography variant="body1" mb={2}>
				Price
			</Typography>
			<ButtonGroup color="secondary" variant="outlined" sx={{ mb: 3 }}>
				<Button variant="contained">$</Button>
				<Button>$$</Button>
				<Button>$$$</Button>
				<Button>$$$$</Button>dd
			</ButtonGroup>
			<Divider sx={{ mb: 3 }} />
			<Typography variant="body1" mb={2}>
				Suggested
			</Typography>
			<FormGroup sx={{ mb: 2 }}>
				<FormControlLabel
					control={<Checkbox color="secondary" defaultChecked />}
					label="Open Now"
				/>
				<FormControlLabel
					control={<Checkbox color="secondary" />}
					label="Reservation"
				/>
				<FormControlLabel
					control={<Checkbox color="secondary" />}
					label="Offers delivery"
				/>
				<FormControlLabel
					control={<Checkbox color="secondary" />}
					label="Offers takeout"
				/>
			</FormGroup>
			<Divider sx={{ mb: 3 }} />
			<FormControl>
				<Typography variant="body1" mb={2}>
					Another
				</Typography>

				<RadioGroup>
					<FormControlLabel
						control={<Radio color="secondary" />}
						label="Offers takeout"
					/>
					<FormControlLabel
						control={<Radio color="secondary" />}
						label="Offers delivery"
					/>
					<FormControlLabel
						control={<Radio color="secondary" />}
						label="Reservation"
					/>
					<FormControlLabel
						control={<Radio color="secondary" />}
						label="Open now"
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

const wrapperStyles = {
	p: 3,
	position: "sticky",
	top: 0,
	height: "100vh",
	overflow: "scroll",
	scrollbarWidth: "none"
};
