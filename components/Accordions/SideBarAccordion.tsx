import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";
import Hover from "../Buttons/Hover";
import Business from "@/public/icons/Business";
import Check from "@/public/icons/Check";
import LogIn from "@/public/icons/LogIn";
import Logo from "@/public/icons/Logo";

export default function SideBarAccordion() {
	const [expanded, setExpanded] = React.useState<string | false>("");

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return rightBlockArr.map((el, index) => (
		<Accordion
			{...(el.children && { expanded: expanded === `panel${index + 1}` })}
			{...(el.children && {
				onChange: handleChange(`panel${index + 1}`)
			})}>
			<AccordionSummary
				aria-controls="panel2d-content"
				id="panel2d-header"
				{...(el.children && {
					expandIcon: (
						<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
					)
				})}>
				<Typography variant="body1">{el.title}</Typography>
			</AccordionSummary>
			{el.children && (
				<AccordionDetails>
					{el.children.map((el) => el.content)}
				</AccordionDetails>
			)}
		</Accordion>
	));
}

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0
	},
	"&::before": {
		display: "none"
	},
	width: "100%",
	"& .MuiAccordionSummary-root": {
		borderRadius: 4
	},
	borderRadius: 8
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)"
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1)
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

const rightBlockArr = [
	{
		title: "SolveMe for Bussiness",
		children: [
			{
				content: (
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							rowGap: 1
						}}>
						<Hover text={"Add a Bussiness"}>
							<Business />
						</Hover>
						<Hover text={"Claim our Bussiness"}>
							<Check />
						</Hover>
						<Hover text={"Log in to Bussiness Account"}>
							<LogIn />
						</Hover>
						<Hover text={"Explore SolveMe for Bussiness"}>
							<Logo color="inherit" />
						</Hover>
					</Box>
				)
			}
		]
	},
	{ title: "Write a Review" },
	{ title: "Account" },
	{ title: "Log In" },
	{ title: "Sign Up" }
];
