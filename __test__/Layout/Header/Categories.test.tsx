import Categories from "@/components/Layout/Header/components/Categories";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Categories component", () => {
  it("renders without crashing", () => {
    render(<Categories />);
  });

  it("displays the correct number of categories", () => {
    const category = [
      { name: "Category 1", icon: <div>Icon 1</div> },
      { name: "Category 2", icon: <div>Icon 2</div> },
    ];
    render(<Categories category={category} />);
    const categoryElements = screen.getAllByRole("button");
    expect(categoryElements).toHaveLength(category.length);
  });

  //   it("calls router's push with the correct route on button click", () => {
  //     // Mock useRouter to provide a mock implementation of router functions
  //     const mockPush = jest.fn();
  //     jest.mock("next/router", () => ({
  //       useRouter: () => ({
  //         push: mockPush,
  //       }),
  //     }));

  //     // Render the Categories component with a category
  //     const category = [{ name: "Category 1", icon: <div>Icon 1</div> }];
  //     render(<Categories category={category} />);

  //     // Click on the button in the Categories component
  //     const button = screen.getByRole("button"); // Assumes only one button
  //     userEvent.click(button);

  //     // Expect that router's push was called with the correct route
  //     expect(mockPush).toHaveBeenCalledWith("/services"); // Adjust the route as needed
  //   });
});
