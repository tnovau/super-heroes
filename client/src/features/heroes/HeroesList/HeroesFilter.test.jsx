import React from "react";
import { render, act, fireEvent } from "@testing-library/react";

import HeroesFilter from "./HeroesFilter";
import {
  createMockStore,
  getStoreState,
  ConnectedComponent
} from "../../../utils/test-utils";

describe("HeroesFilter", () => {
  it("should dispatch setFilter onChange", () => {
    const mockStore = createMockStore(getStoreState(), jest.fn());
    const { container } = render(<ConnectedComponent store={mockStore}>
      <HeroesFilter></HeroesFilter>
    </ConnectedComponent>);

    act(() => {
      fireEvent.change(
        container.querySelector("input"), {
          target: {
            value: "Tho"
          }
        });
    });

    expect(mockStore.dispatch.mock.calls[0][0].payload).toBe("Tho")
  });
});