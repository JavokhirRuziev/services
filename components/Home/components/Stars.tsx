import { IconButton } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

export default ({ review }: { review: any }) => {
  const fullStars = Math.floor(review);
  const halfStars = review - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  const starsArray = [];

  for (let i = 0; i < fullStars; i++) {
    starsArray.push(<StarIcon sx={{ color: "#ebd442" }} key={`full_${i}`} />);
  }
  if (halfStars === 1) {
    starsArray.push(<StarHalfIcon sx={{ color: "#ebd442" }} key="half" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(
      <StarOutlineIcon sx={{ color: "#ebd442" }} key={`empty_${i}`} />
    );
  }
  return starsArray.map((star, index) => (
    <IconButton key={index} disabled>
      {star}
    </IconButton>
  ));
};
