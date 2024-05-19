// components/LocationModal.js
import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const LocationModal = ({ open, handleClose, handleConfirm }: any) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			sx={{ border: "none", userSelect: "none" }}>
			<Box sx={modalStyles}>
				<Typography variant="h6" mb={2}>
					Location Access
				</Typography>
				<Typography variant="body1" mb={4}>
					This application needs access to your location. Do you want
					to allow access?
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					<Button onClick={handleClose} sx={{ marginRight: 2 }}>
						Cancel
					</Button>
					<Button variant="contained" onClick={handleConfirm}>
						Allow
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

const modalStyles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: 2
};

export default LocationModal;
