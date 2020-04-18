import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { store } from "./redux";
import { ConnectedComponent } from "./utils/test-utils";

test("renders Avengers title", () => {
  window.scrollTo = jest.fn();
  const { getByText } = render(
    <ConnectedComponent store={store}>
      <App />
    </ConnectedComponent>
  );
  const linkElement = getByText(/Avengers/i);
  expect(linkElement).toBeInTheDocument();
});
