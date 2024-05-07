import StarRating from "@/components/Rating";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type contentTypes = {
	el: {
		img: string;
		author_name: string;
		review: number;
	};
};

export default ({ el }: contentTypes) => {
	console.log(el);
	return (
		<Box sx={{ width: 250, height: 250, p: 1 }}>
			<Box sx={{ width: "100%", height: "70%", position: "relative" }}>
				<Image
					src={el?.img}
					objectFit="cover"
					layout="fill"
					alt="tooltip-image"
				/>
			</Box>
			<Box sx={{ mt: 1 }}>
				<Typography variant="h4" mb={2}>
					{el?.author_name}
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "flex-end",
						columnGap: 1
					}}>
					<StarRating {...{ rating: el?.review }} />{" "}
					<Typography variant="body2">{el?.review}</Typography>
				</Box>
			</Box>
		</Box>
	);
};
