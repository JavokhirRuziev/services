import StarRating from "@/components/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

type contentTypes = {
	el: {
		img: string;
		author_name: string;
		review: number;
	};
};

export default ({ el }: contentTypes) => {
	return (
		<Box sx={{ width: 290, height: "auto", py: "4px" }}>
			<Box sx={imageWrapper}>
				<Image
					src={el?.img}
					style={{ objectFit: "cover", borderRadius: 4 }}
					fill
					alt="tooltip-image"
				/>
			</Box>
			<Box sx={bottomWrapperStyles}>
				<Typography variant="h6">{el?.author_name}</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						columnGap: 1
					}}>
					<StarRating {...{ rating: el?.review }} />{" "}
					<Typography variant="body2" color={"grey.200"}>
						({el?.review})
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

const bottomWrapperStyles = {
	mt: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	px: 1
};

const imageWrapper = {
	width: "100%",
	height: "85%",
	position: "relative",
	minHeight: 200
};
