import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../../../../Layout/Footer/components/Title";

describe("Subtitle", () => {
  test("renders the children text correctly", () => {
    render(<Title>Test Subtitle</Title>);
    const subtitleElement = screen.getByText("Test Subtitle");

    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement).toHaveStyle("color: white"); // Example of checking a style
  });
});
