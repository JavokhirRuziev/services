import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "@/components/Layout/Header/components/DropDown";

describe("DropDown component", () => {
  it("renders without crashing", () => {
    render(<DropDown />);
  });

  it("displays the correct name", () => {
    const el = { name: "Test Category", category: [] };
    render(<DropDown el={el} isHome={false} />);
    const nameElement = screen.getByText(el.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("displays the correct number of categories", () => {
    const el = {
      name: "Test Category",
      category: [{ name: "Category 1", icon: <div>Icon 1</div> }],
    };
    render(<DropDown el={el} isHome={false} />);
    const categoryElements = screen.getAllByRole("button");
    expect(categoryElements).toHaveLength(el.category.length);
  });

  //   it("navigates to the correct page when a category is clicked", () => {
  //     const mockPush = jest.fn();
  //     jest.mock("next/router", () => ({
  //       useRouter: () => ({
  //         push: mockPush,
  //       }),
  //     }));

  //     const el = {
  //       name: "Test Category",
  //       category: [{ name: "Category 1", icon: <div>Icon 1</div> }],
  //     };
  //     render(<DropDown el={el} isHome={false} />);
  //     const categoryElement = screen.getByRole("button");
  //     userEvent.click(categoryElement);
  //     expect(mockPush).toHaveBeenCalledWith("/services");
  //   });
});
