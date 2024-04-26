import * as React from "react";
import Rating from "@mui/material/Rating";

interface Props {
  rating: number | null;
}

const StarRating: React.FC<Props> = ({ rating }) => {
  const [value, setValue] = React.useState<number>(rating || 0);

  return (
    <Rating
      name="simple-controlled"
      data-testid="rating"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue || 0);
      }}
    />
  );
};

export default StarRating;
