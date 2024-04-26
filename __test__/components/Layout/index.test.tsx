import { render, screen } from "@testing-library/react";
import Layout from "@/components/Layout/index";

describe("Layout component", () => {
  it("renders without crashing", () => {
    render(<Layout />);
  });

  it("displays the header component", () => {
    render(<Layout />);
    const headerElement = screen.getByTestId("header-component");
    expect(headerElement).toBeInTheDocument();
  });

  it("displays the children components", () => {
    const childrenElement = (
      <div data-testid="children-component">Test Children</div>
    );
    render(<Layout children={childrenElement} />);
    const childrenElementTest = screen.getByTestId("children-component");
    expect(childrenElementTest).toBeInTheDocument();
  });

  it("displays the footer component", () => {
    render(<Layout />);
    const footerElement = screen.getByTestId("footer-component");
    expect(footerElement).toBeInTheDocument();
  });
});
