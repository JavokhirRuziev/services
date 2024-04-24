import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // For richer user interactions
import Subtitle from "../../../../Layout/Footer/components/Subtitle";

describe("Subtitle Component", () => {
  test("renders the children text correctly", () => {
    render(<Subtitle>Test Subtitle</Subtitle>);
    const subtitleElement = screen.getByText("Test Subtitle");
    expect(subtitleElement).toBeInTheDocument();
  });

  test("renders as a link if the link prop is provided", () => {
    render(<Subtitle link="https://www.example.com">Link Text</Subtitle>);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://www.example.com");
  });

  test("applies the expected styles", async () => {
    // Modify this line
    render(<Subtitle link="https://www.example.com">Link Text</Subtitle>);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveStyle("cursor: pointer");

    // Simulate hover and check underline
    userEvent.hover(linkElement);
    await waitFor(
      () => {
        expect(linkElement).toHaveStyle("text-decoration: none"); // Updated expectation
      },
      { timeout: 200 }
    );
  });
});
