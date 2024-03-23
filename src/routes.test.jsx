import { render, screen } from "@testing-library/react";
import routes from "./routes";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";

describe("Root route", () => {
  it("Should render navbar, footer, and main elements with text", () => {
    const router = createMemoryRouter(routes);
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});

describe("Site navigation", () => {
  it("should go to the shop page when clicking the shop link", async () => {
    global.fetch = vi.fn();
    const router = createMemoryRouter(routes);
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const shopLink = screen.getAllByRole("link", { name: "Shop" })[0];

    await user.click(shopLink);
    expect(screen.getByRole("heading", { name: /shop/i })).toBeInTheDocument();
  });

  it("should go to the cart page when clicking the cart link", async () => {
    const router = createMemoryRouter(routes);
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const cartLink = screen.getByRole("link", { name: /cart/i });

    await user.click(cartLink);
    expect(
      screen.getByRole("heading", { name: /your cart/i })
    ).toBeInTheDocument();
  });

  it("should go to the homepage when clicking the home link", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link", { name: /shellendorf/i });

    await user.click(link);
    expect(
      screen.getByRole("heading", { name: /shellendorf antiques/i })
    ).toBeInTheDocument();
  });

  it("should render a link to the shop page on bad routes", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/badRoute"],
    });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const link = screen.getByRole("link", { name: /shop/i });

    await user.click(link);
    expect(screen.getByRole("heading", { name: /shop/i })).toBeInTheDocument();
  });
});

describe("Shopping", () => {
  it("should open a modal with a link to the cart when a user adds an item to the cart", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ title: "FakeItem", price: 90, image: "fake.jpg" }),
      })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const btn = await screen.findByRole("button", { name: /add/i });
    await user.click(btn);
    expect(
      screen.getByRole("link", { name: "Go to Cart" })
    ).toBeInTheDocument();
  });

  it("should open a modal with a link to the shop when a user adds an item to the cart", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ title: "FakeItem", price: 90, image: "fake.jpg" }),
      })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const btn = await screen.findByRole("button", { name: /add/i });
    await user.click(btn);
    expect(
      screen.getByRole("link", { name: "Continue Shopping" })
    ).toBeInTheDocument();
  });

  it("displays the item a user added to their cart on the cart page.", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ title: "FakeItem", price: 90, image: "fake.jpg" }),
      })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const btn = await screen.findByRole("button", { name: /add/i });
    await user.click(btn);
    await user.click(screen.getByRole("link", { name: "Go to Cart" }));
    expect(
      screen.getByRole("heading", { name: /fakeitem/i })
    ).toBeInTheDocument();
  });

  it("can increase the quantity of the item", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ title: "FakeItem", price: 90, image: "fake.jpg" }),
      })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const btn = await screen.findByRole("button", { name: "+" });
    await user.click(btn);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("can decrease the quantity of the item to a minimum of one", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ title: "FakeItem", price: 90, image: "fake.jpg" }),
      })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);
    const btn = await screen.findByRole("button", { name: "+" });
    const minus = await screen.findByRole("button", { name: "-" });
    await user.click(btn);
    await user.click(minus);
    await user.click(minus);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
