import { loadingStart, loadingFinish } from "./ui-actions";
import uiReducer from "./ui-reducer";

describe('UI Feature', () => {
  it('should set loading to true when loading starts', () => {
    const newState = uiReducer(undefined, loadingStart());

    expect(newState.loading).toBe(true);
  });

  it('should set loading to false when loading finish', () => {
    const previousState = { loading: true };

    const newState = uiReducer(previousState, loadingFinish());

    expect(newState.loading).toBe(false);
  });

  it('should return previousState if the action is not related to ui', () => {
    const previousState = { loading: true };

    const newState = uiReducer(previousState, { type: '' });

    expect(newState).toBe(previousState);
  });
});
