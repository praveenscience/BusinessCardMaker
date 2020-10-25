import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Hello Everyone text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Everyone/i);
  expect(linkElement).toBeInTheDocument();
});
