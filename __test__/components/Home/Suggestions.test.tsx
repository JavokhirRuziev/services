import Suggestions from "@/components/Home/Suggestions";
import { suggestions_arr } from "@/public/data/suggestions_data";
import { render, screen } from "@testing-library/react";

describe("Suggestions", () => {
	test("renders the component", () => {
		render(<Suggestions />);
		const title = screen.getByText("Suggestions");
		expect(title).toBeInTheDocument();
	});

	test("renders the correct number of suggestions cards", () => {
		render(<Suggestions />);
		const suggestionCards = screen.getAllByTestId("suggestion-card");
		expect(suggestionCards.length).toBe(suggestions_arr.length);
	});
});
