import Popular from "@/components/Home/Popular";
import { suggestions_arr } from "@/public/data/suggestions_data";
import { render, screen } from "@testing-library/react";

describe("Suggestions", () => {
	test("renders the component", () => {
		render(<Popular />);
		const title = screen.getByText("Popular properties in Tashkent");
		expect(title).toBeInTheDocument();
	});

	test("renders the correct number of suggestions cards", () => {
		render(<Popular />);
		const suggestionCards = screen.getAllByTestId("suggestion-card");
		expect(suggestionCards.length).toBe(suggestions_arr.length);
	});
});
