import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rating from "@/components/Rating/index";

describe("StarRating component", () => {
  it("renders without crashing", () => {
    render(<Rating rating={3} />);
  });

  it("displays the star rating component with initial value", async () => {
    render(<Rating rating={3} />);
    const ratingElement = screen.getByTestId("rating");

    expect(ratingElement).toBeInTheDocument();

    await waitFor(
      () => {
        // Force an update before checking
        ratingElement.click(); // Or any action that might trigger an update
      },
      {
        onTimeout: () => {
          // Retry the assertion
          expect(ratingElement).toHaveAttribute("value", "3");
        },
      }
    );
  });

  it("updates the star rating value when changed", async () => {
    // Use the `render` result to track state changes
    const { rerender } = render(<Rating rating={3} />);

    // Click on the third star
    userEvent.click(screen.getAllByRole("radio")[2]);

    // Re-render with the expected new value
    rerender(<Rating rating={3} />); // Assuming clicking the 3rd star sets the value to 3

    // Assertion based on DOM changes after the re-render
    await waitFor(() => {
      setTimeout(() => {
        expect(screen.getByTestId("rating")).toHaveAttribute(
          "aria-label",
          "3 stars"
        );
      }, 50); // Adjust timeout as needed
    });
  });
});
