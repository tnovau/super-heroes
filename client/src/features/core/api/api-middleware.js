import { API_CALL_ACTION } from './api-action';

export const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type === API_CALL_ACTION) {
    const { payload: { config, onSuccess, onError, url } } = action;
    fetch(url, config)
      .then(res => res.json())
      .then(data => dispatch(onSuccess(data)))
      .catch(err => dispatch(onError(err)));
  }

  next(action);
};

export default apiMiddleware;