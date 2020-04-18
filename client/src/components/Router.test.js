import React from "react";
import { render } from "@testing-library/react";

import Router from "./Router";
import { ConnectedComponent, createMockStore } from "../utils/test-utils";

describe('Router', () => {
  it("should no match", () => {
    const { getByTestId } = render(
      <ConnectedComponent store={createMockStore()} initialEntries={['/some-weird-route']}>
        <Router />
      </ConnectedComponent>
    );

    expect(getByTestId("no-match-container")).toBeInTheDocument();
  });
});
