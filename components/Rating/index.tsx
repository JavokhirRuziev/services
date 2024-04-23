import * as React from "react";
import Rating from "@mui/material/Rating";

interface Props {
  rating: number | null; // Allow null for the rating prop
}

const StarRating: React.FC<Props> = ({ rating }) => {
  const [value, setValue] = React.useState<number>(rating || 0); // Provide a default value of 0 if rating is null

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue || 0); // Ensure newValue is not null
      }}
    />
  );
};

export default StarRating;
