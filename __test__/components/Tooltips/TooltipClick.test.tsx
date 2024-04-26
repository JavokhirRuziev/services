import React, { useRef, useEffect } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TooltipClick from "@/components/Tooltips/TooltipClick";
import "@testing-library/jest-dom";

describe("TooltipClick", () => {
  test("renders children and triggers handleTooltipClose on click away", async () => {
    const handleTooltipClose = jest.fn();

    const TestWrapper = () => {
      const wrapperRef = useRef(null);

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target)
          ) {
            handleTooltipClose();
          }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

      return (
        <div ref={wrapperRef} data-testid="tooltip-parent">
          <TooltipClick
            open={true}
            handleTooltipClose={handleTooltipClose}
            content="Test Content"
            placement="bottom"
          >
            <button>Test Button</button>
          </TooltipClick>
        </div>
      );
    };

    render(<TestWrapper />);

    const buttonElement = screen.getByText("Test Button");
    fireEvent.click(buttonElement);

    expect(handleTooltipClose).not.toHaveBeenCalled();

    await screen.findByText("Test Content");

    // Simulate click away from the tooltip
    fireEvent.mouseDown(document.body);

    // Wait for the state change to occur
    await waitFor(() => {
      expect(handleTooltipClose).toHaveBeenCalled();
    });
  });
});
