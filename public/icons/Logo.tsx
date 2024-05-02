export default ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || "25"}
      viewBox="0 -960 960 960"
      width={width || "25"}
      fill={color || "white"}
    >
      <path d="M241.077-209.23 90.769-480l152.308-270.77h128.256L219.179-480l93.641 166.001L580.769-750.77h136L869.231-480 716.923-209.23H588.667L740.821-480l-93.795-165.539L379.025-209.23H241.077Z" />
    </svg>
  );
};
