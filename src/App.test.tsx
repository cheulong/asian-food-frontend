import { expect, test, describe } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App.tsx";

describe("renders the home page", () => {
  test("show the title", async () => {
    const { getByText } = render(<App />);
    await expect.element(getByText("Asian Food Menu")).toBeInTheDocument();
  });
});
