import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Homepage", () => {
  it("renders navbar, footer, and root route", () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });
});
