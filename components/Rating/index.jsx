import * as React from "react";
import Rating from "@mui/material/Rating";

export default ({ rating }) => {
  const [value, setValue] = React.useState(rating);

  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
