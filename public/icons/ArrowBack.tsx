export default ({ style, color }: any) => {
  return (
    <svg
      id="arrow-back"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      fill={color || "white"}
      style={style}
      data-testid="arrow-back"
    >
      <path d="M372.31-267.69 160-480l212.31-212.31L400.62-664l-164 164H800v40H236.62l164 164-28.31 28.31Z" />
    </svg>
  );
};
