import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "@/components/Layout/Header/components/SearchInput";
import { services_data } from "@/public/data/services_data";

describe("MainComponent", () => {
  it("renders without crashing", () => {
    render(<SearchInput />);
  });

  it("displays the search inputs correctly", () => {
    render(<SearchInput />);
    const categoryInput = screen.getByPlaceholderText("Categories");
    const locationInput = screen.getByPlaceholderText("Location");
    expect(categoryInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
  });

  it("displays the correct number of DropDown components", () => {
    render(<SearchInput />);
    const dropDownComponents = screen.getAllByTestId("dropdown-component");
    expect(dropDownComponents).toHaveLength(services_data.length);
  });

  //   it("allows searching for categories", () => {
  //     render(<SearchInput />);
  //     const categoryInput = screen.getByPlaceholderText("Categories");
  //     userEvent.type(categoryInput, "Test Category");
  //     expect(categoryInput).toHaveValue("Test Category");
  //   });

  //   it("allows searching for locations", () => {
  //     render(<SearchInput />);
  //     const locationInput = screen.getByPlaceholderText("Location");
  //     userEvent.type(locationInput, "Test Location");
  //     expect(locationInput).toHaveValue("Test Location");
  //   });
});
