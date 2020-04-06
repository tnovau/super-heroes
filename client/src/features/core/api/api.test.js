import { apiCall } from "./api-action";
import { apiMiddleware } from "./api-middleware";

describe('API Module', () => {
  it('Should handle API_CALL action good response', async () => {
    const url = '/api/marvel';
    const config = {};
    const dispatch = jest.fn();
    const next = jest.fn();
    const onSuccessAction = { type: '' };
    const onSuccess = jest.fn().mockReturnValue(onSuccessAction);
    const onError = jest.fn();

    const mockSuccessResponse = {};
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse),
    }));

    await apiMiddleware({ dispatch })(next)(apiCall(url, config, onSuccess, onError));

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(url, config);

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith(onSuccessAction);

    expect(onSuccess).toBeCalledTimes(1);
    expect(onSuccess).toBeCalledWith(mockSuccessResponse);

    expect(onError).toBeCalledTimes(0);

    expect(next).toBeCalledTimes(1);

    global.fetch.mockClear();
  });

  it('Should handle API_CALL action error', async () => {
    const url = '/api/marvel';
    const config = {};
    const dispatch = jest.fn();
    const next = jest.fn();
    const onErrorAction = { type: '' };
    const onSuccess = jest.fn();
    const onError = jest.fn().mockReturnValue(onErrorAction);

    const mockErrorReason = 'reason';
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(mockErrorReason));

    await apiMiddleware({ dispatch })(next)(apiCall(url, config, onSuccess, onError));

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(url, config);

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith(onErrorAction);

    expect(onSuccess).toBeCalledTimes(0);

    expect(onError).toBeCalledTimes(1);
    expect(onError).toBeCalledWith(mockErrorReason);

    expect(next).toBeCalledTimes(1);

    global.fetch.mockClear();
  });

  it('Should handle other actions', () => {
    const dispatch = jest.fn();
    const next = jest.fn();

    apiMiddleware({ dispatch })(next)({ type: '' });

    expect(next).toBeCalledTimes(1);
    expect(dispatch).toBeCalledTimes(0);
  });
});