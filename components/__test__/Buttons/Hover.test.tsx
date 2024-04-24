import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Hover from "@/components/Buttons/Hover";

describe("CustomBox", () => {
  test("renders the component correctly with provided props", () => {
    const onClickMock = jest.fn();
    render(
      <Hover
        text="Test Text"
        onClick={onClickMock}
        variant="subtitle1"
        key="test-key"
      >
        <span>Child Element</span>
      </Hover>
    );

    const textElement = screen.getByText("Test Text");
    expect(textElement).toBeInTheDocument();

    const childElement = screen.getByText("Child Element");
    expect(childElement).toBeInTheDocument();

    fireEvent.click(textElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
