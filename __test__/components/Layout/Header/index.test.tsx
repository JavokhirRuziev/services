import { render, screen } from "@testing-library/react";
import Header from "@/components/Layout/Header/index";

jest.mock("next/router", () => ({
	useRouter: () => ({
		pathname: "/"
	})
}));

describe("Header component", () => {
	it("renders without crashing", () => {
		render(<Header />);
	});

	// it("displays the logo and text correctly", () => {
	//   render(<Header />);
	//   const logoText = screen.getByText("SolveMe");
	//   expect(logoText).toBeInTheDocument();
	// });

	it("displays the search input component", () => {
		render(<Header />);
		const searchInput = screen.getByTestId("search-input");
		expect(searchInput).toBeInTheDocument();
	});

	it("displays the right block elements correctly", () => {
		render(<Header />);
		const rightBlockElements = screen.getAllByTestId("right-block-element");
		expect(rightBlockElements.length).toBeGreaterThan(0);
	});

	//   it("toggles the tooltip open and close", () => {
	//     render(<Header />);
	//     const tooltipTriggerElement = screen.getByText("Tooltip Trigger Text");

	//     // Tooltip is initially closed
	//     const tooltipElement = screen.queryByText("Tooltip Content");
	//     expect(tooltipElement).not.toBeInTheDocument();

	//     // Open tooltip
	//     userEvent.click(tooltipTriggerElement);
	//     const openedTooltipElement = screen.getByText("Tooltip Content");
	//     expect(openedTooltipElement).toBeInTheDocument();

	//     // Close tooltip
	//     userEvent.click(tooltipTriggerElement);
	//     const closedTooltipElement = screen.queryByText("Tooltip Content");
	//     expect(closedTooltipElement).not.toBeInTheDocument();
	//   });
});
