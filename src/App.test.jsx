/* 
WHAT TO TEST
---
App should render the navbar, footer, and image (just use a snapShot)
Only thing to test should be clicking the navbar and visiting the different routes
Child elements of the root page are just the navbar (the footer doesn't really do anything.)\
BE SURE TO UPDATE THE SNAPSHOT AFTER YOU RUN THIS TEST
*/

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Homepage", () => {
  it("renders navbar, footer, and root route", () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });

  it("navigates from the homepage to the shop page", async () => {
    const { container } = render(<App />, { wrapper: MemoryRouter });
    const shopLink = screen.getByRole("link", { name: "Shop" });

    const user = userEvent.setup();
    await user.click(shopLink);

    expect(screen.getAllByRole("heading")[0]).toMatch(/shop/i);
  });
});
