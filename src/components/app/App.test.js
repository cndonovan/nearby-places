import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the header", () => {
  render(<App />);
  const headerEl = screen.getByText(/Nearby places/i);
  expect(headerEl).toBeInTheDocument();
});
