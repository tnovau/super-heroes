export const LOADING_START_ACTION = '[ui] - loading start';
export const LOADING_FINISH_ACTION = '[ui] - loading finish';

export const loadingStart = () => ({
  type: LOADING_START_ACTION,
});

export const loadingFinish = () => ({
  type: LOADING_FINISH_ACTION,
});
