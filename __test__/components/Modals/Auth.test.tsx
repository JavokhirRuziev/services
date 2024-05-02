import AuthModal from "@/components/Modals/Auth";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AuthModal component", () => {
  it("renders without crashing", () => {
    render(<AuthModal />);
  });

  it("displays the 'Sign Up' button", () => {
    render(<AuthModal />);
    const signUpButton = screen.getByText("Sign Up");
    expect(signUpButton).toBeInTheDocument();
  });

  //   it("opens the modal when 'Sign Up' button is clicked", () => {
  //     render(<AuthModal />);
  //     const signUpButton = screen.getByText("Sign Up");
  //     fireEvent.click(signUpButton);

  //     const modalTitle = screen.getByText("Welcome to Solve Me!");
  //     expect(modalTitle).toBeInTheDocument();
  //   });

  //   it("closes the modal when closed", () => {
  //     render(<AuthModal />);
  //     const signUpButton = screen.getByText("Sign Up");
  //     fireEvent.click(signUpButton);

  //     const closeButton = screen.getByLabelText("Close");
  //     fireEvent.click(closeButton);

  //     const modalTitle = screen.queryByText("Welcome to Solve Me!");
  //     expect(modalTitle).toBeNull();
  //   });
});
