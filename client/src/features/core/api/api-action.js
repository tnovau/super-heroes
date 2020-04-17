export const API_CALL_ACTION = "[api] call";

/** @typedef {{ type: string, payload: any }} action */

/**
 * @param {string} url
 * @param {RequestInit} config
 * @param {(response) => action} onSuccess
 * @param {(error) => action} onError
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