import { getHeroes, getHeroesError, getHeroesSuccess } from "../heroes-action";
import { loadingStart, loadingFinish } from "../../core/ui";
import {
  heroesGetMiddleware,
  heroesGetErrorMiddleware,
  heroesGetSuccessMiddleware,
  getSeriesCharactersUrl
} from "../heroes-middlewares";

describe("HEROES Module", () => {
  describe("heroesGetMiddleware", () => {
    it("Should handle GET_HEROES_ACTION action good response", () => {
      const next = jest.fn();

      const getHeroesAction = getHeroes();
      heroesGetMiddleware()(next)(getHeroesAction);

      expect(next).toBeCalledTimes(3);
      expect(next).toHaveBeenNthCalledWith(1, loadingStart());
      expect(next.mock.calls[1][0].payload.url).toBe(getSeriesCharactersUrl());
      expect(next).toHaveBeenNthCalledWith(3, getHeroesAction);
    });

    it("Should handle other actions", () => {
      const next = jest.fn();

      heroesGetMiddleware()(next)({ type: "" });

      expect(next).toBeCalledTimes(1);
    });
  });

  describe("heroesGetErrorMiddleware", () => {
    it("Should handle GET_HEROES_ACTION action good response", () => {
      const dispatch = jest.fn();
      const next = jest.fn();

      const getHeroesAction = getHeroesError("SomeError");
      heroesGetErrorMiddleware({ dispatch })(next)(getHeroesAction);

      expect(next).toBeCalledTimes(1);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, loadingFinish());
    });

    it("Should handle other actions", () => {
      const next = jest.fn();

      heroesGetErrorMiddleware({})(next)({ type: "" });

      expect(next).toBeCalledTimes(1);
    });
  });

  describe("heroesGetSuccessMiddleware", () => {
    it("Should handle GET_HEROES_ACTION action good response", () => {
      const dispatch = jest.fn();
      const next = jest.fn();

      const results = []
      const getHeroesSuccessAction = getHeroesSuccess({
        data: { results }
      });
      heroesGetSuccessMiddleware({ dispatch })(next)(getHeroesSuccessAction);

      expect(next).toBeCalledTimes(1);
      expect(next.mock.calls[0][0].payload).toBe(results);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, loadingFinish());
    });

    it("Should handle other actions", () => {
      const next = jest.fn();

      heroesGetSuccessMiddleware({})(next)({ type: "" });

      expect(next).toBeCalledTimes(1);
    });
  });
});