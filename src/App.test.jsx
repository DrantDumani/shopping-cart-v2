/* 
WHAT TO TEST
---
App should render the navbar, footer, and image (just use a snapShot)
Only thing to test should be clicking the navbar and visiting the different routes
Child elements of the root page are just the navbar (the footer doesn't really do anything.)\
BE SURE TO UPDATE THE SNAPSHOT AFTER YOU RUN THIS TEST
*/

import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Homepage", () => {
  it("renders navbar, footer, and root route", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
