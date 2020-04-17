import { API_CALL_ACTION } from "./api-action";

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action);
  if (action.type === API_CALL_ACTION) {
    const { payload: { config, onSuccess, onError, url } } = action;
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      return dispatch(onSuccess(data));
    }
    catch (err) {
      return dispatch(onError(err));
    }
  }
};

export default apiMiddleware;