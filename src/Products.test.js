import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "./pages/Products";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

//Testing if product page renders correctly
test("product page renders without crashing", () => {
  render(<Products />);
  expect(screen.getByText(/product list/i)).toBeInTheDocument();

  // Check if at least one product from JSON appears
  const productName = screen.getByText(/philips hue bulb/i);
  expect(productName).toBeInTheDocument();
});
