import Login from "@/components/Modals/components/Login";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Login component", () => {
  it("renders without crashing", () => {
    render(<Login goBack={() => {}} />);
  });

  it("displays the 'LogIn' heading", () => {
    render(<Login goBack={() => {}} />);
    const heading = screen.getByText("LogIn");
    expect(heading).toBeInTheDocument();
  });

  it("displays the 'Back' button", () => {
    render(<Login goBack={() => {}} />);
    const backButton = screen.getByTestId("back-button"); // Assuming you set a test ID for the BackButton component
    expect(backButton).toBeInTheDocument();
  });

  it("displays the 'Phone' field", () => {
    render(<Login goBack={() => {}} />);
    const phoneField = screen.getByPlaceholderText("+998XX XXX XX XX");
    expect(phoneField).toBeInTheDocument();
  });

  it("displays the 'Verification code' field", () => {
    render(<Login goBack={() => {}} />);
    const codeField = screen.getByPlaceholderText("Verification code");
    expect(codeField).toBeInTheDocument();
  });

  it("displays the 'Send' button", () => {
    render(<Login goBack={() => {}} />);
    const sendButton = screen.getByText("Send");
    expect(sendButton).toBeInTheDocument();
  });

  it("displays the 'Next' button", () => {
    render(<Login goBack={() => {}} />);
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeInTheDocument();
  });

  //   it("submits the form when 'Next' button is clicked", () => {
  //     const handleSubmit = jest.fn();
  //     render(<Login goBack={() => {}} onSubmit={handleSubmit} />);
  //     const phoneField = screen.getByPlaceholderText("+998XX XXX XX XX");
  //     const codeField = screen.getByPlaceholderText("Verification code");
  //     const nextButton = screen.getByText("Next");
  //     fireEvent.change(phoneField, { target: { value: "1234567890" } });
  //     fireEvent.change(codeField, { target: { value: "12345" } });
  //     fireEvent.click(nextButton);
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       phone: "1234567890",
  //       code: "12345",
  //     });
  //   });
});
