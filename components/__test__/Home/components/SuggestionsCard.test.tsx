import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SuggestionsCard from "@/components/Home/components/SuggestionsCard";

describe("SuggestionsCard", () => {
  // Sample mock data
  const mockData = {
    author_name: "John Doe",
    img: "/images/card2.jpeg",
    review: 4.5,
    description: "This is a test suggestion",
  };

  it("renders the image", () => {
    render(<SuggestionsCard el={mockData} />);
    const image = screen.getByAltText(mockData.img);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockData.img);
  });

  it("renders the rating", () => {
    render(<SuggestionsCard el={mockData} />);

    // Add data-testid="rating" to the relevant element in your SuggestionsCard
    const ratingElement = screen.getByTestId("rating");
    expect(ratingElement).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<SuggestionsCard el={mockData} />);
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });
  it("renders the correct number of action icons", () => {
    render(<SuggestionsCard el={mockData} />);
    const actionIcons = screen.getAllByRole("button");
    expect(actionIcons).toHaveLength(4);
  });
});

// it("renders the author name", () => {
//   render(<SuggestionsCard el={mockData} />);

//   // Find the CardHeader component directly by its role
//   const cardHeader = screen.getByRole("generic", { name: /card header/i });

//   // Find the appropriate heading element within the CardHeader
//   // **Adjust the selector if your heading isn't an `<h2>`**
//   const authorNameElement = cardHeader.querySelector("h2");

//   expect(authorNameElement).toHaveTextContent(/John Doe/i);
// });

// it("calls the onClick handler when an action icon is clicked", () => {
//   const mockOnClick = jest.fn();
//   render(<SuggestionsCard el={mockData} onClick={mockOnClick} />);

//   const actionIcons = screen.getAllByRole("button");
//   const firstActionIcon = actionIcons[0]; // Change index if needed
//   userEvent.click(firstActionIcon);
//   expect(mockOnClick).toHaveBeenCalled();
// });
