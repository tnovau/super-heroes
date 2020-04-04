export const API_CALL_ACTION = '[api] call';

/**
 * @param {string} url
 * @param {RequestInit} config
 * @param {(response) => object} onSuccess
 * @param {(error) => object} onError
 */
export const apiCall = (url, config, onSuccess, onError) => ({
  type: API_CALL_ACTION,
  payload: {
    config,
    onSuccess,
    onError,
    url
  }
});