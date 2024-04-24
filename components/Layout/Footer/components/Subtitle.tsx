import { Link, Typography } from "@mui/material";

const Subtitle = ({ children, link }: any) => {
  return (
    <Link
      {...(link && { href: link })}
      underline="hover"
      style={{ cursor: "pointer", marginBottom: "10px" }}
      role="link"
    >
      <Typography
        variant="body2"
        fontWeight={400}
        color={"white"}
        letterSpacing={2}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default Subtitle;
