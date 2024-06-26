export default ({ size }: { size?: number | string }) => {
	return (
		<svg
			width={size || "12"}
			height={size || "12"}
			viewBox="0 0 12 12"
			fill={"none"}
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6 1L0 4.5L6 8L11 5.0835V8.75H12V4.5L6 1ZM1.9995 6.745V9C2.46483 9.62141 3.06867 10.1257 3.76304 10.4729C4.4574 10.8201 5.22317 11.0006 5.9995 11C6.77591 11.0007 7.54178 10.8202 8.23624 10.473C8.9307 10.1259 9.53462 9.62148 10 9V6.7455L6 9.079L1.9995 6.745Z"
				fill="#6E7072"
			/>
		</svg>
	);
};
