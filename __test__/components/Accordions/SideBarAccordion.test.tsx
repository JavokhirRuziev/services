import SideBarAccordion from "@/components/Accordions/SideBarAccordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SideBarAccordion", () => {
	test("renders the component", () => {
		render(<SideBarAccordion />);
		const accordionTitle = screen.getByText("SolveMe for Bussiness");
		expect(accordionTitle).toBeInTheDocument();
	});
	test("renders the correct number of accordions", () => {
		render(<SideBarAccordion />);
		const accordionTitles = screen.getAllByRole("button");
		expect(accordionTitles.length).toBe(5);
	});
	// test("expands and collapses the accordion", () => {
	// 	render(<SideBarAccordion />);
	// 	const accordionTitle = screen.getByText("SolveMe for Bussiness");
	// 	fireEvent.click(accordionTitle);
	// 	const accordionDetails = screen.getByTestId("panel-1");
	// 	expect(accordionDetails).toBeInTheDocument();
	// 	fireEvent.click(accordionTitle);
	// 	expect(screen.queryByTestId("panel-1")).toBeNull();
	// });
});
