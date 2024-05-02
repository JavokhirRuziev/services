import BackButton from "@/components/Buttons/BackButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("BackButton component", () => {
  it("renders without crashing", () => {
    render(<BackButton goBack={() => {}} />);
  });

  it("displays the back button with correct text and icon", () => {
    render(<BackButton goBack={() => {}} />);
    const textElement = screen.getByText("Back");
    const arrowBackElement = screen.getByTestId("arrow-back");
    expect(textElement).toBeInTheDocument();
    expect(arrowBackElement).toBeInTheDocument();
  });
  it("calls the goBack function when clicked", () => {
    const goBackMock = jest.fn();
    render(<BackButton goBack={goBackMock} />);

    const backButtonElement = screen.getByTestId("back-button");

    // Troubleshooting:
    console.log("backButtonElement", backButtonElement); // Check if found

    fireEvent.click(backButtonElement);
    expect(goBackMock).toHaveBeenCalled();
  });
});
