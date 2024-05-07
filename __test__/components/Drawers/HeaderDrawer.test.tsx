import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HeaderDrawer from "@/components/Drawers/HeaderDrawer";

describe("HeaderDrawer", () => {
	const testContent = <div data-testid="drawer-content">Test Content</div>;
	test("opens the drawer when screen width is at tablet breakpoint", async () => {
		// 1. Resize the window for the test
		window.resizeTo(1140, 800); // Or any size within your tablet breakpoint

		// 2. Render the component
		render(<HeaderDrawer>{testContent}</HeaderDrawer>);

		// 3. Expect drawer to be initially closed
		expect(screen.queryByTestId("drawer-content")).not.toBeInTheDocument();

		// 4. Find the menu button and click
		const menuButton = screen.getByRole("button");
		fireEvent.click(menuButton);

		// 5. Expect drawer to now be open
		expect(screen.getByTestId("drawer-content")).toBeInTheDocument();
	});
});
