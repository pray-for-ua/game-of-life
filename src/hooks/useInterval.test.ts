import useInterval from './useInterval';
import { renderHook } from '@testing-library/react-hooks';


describe('useInterval testes', () => {

  jest.useFakeTimers()

  test('useInterval calls', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('useInterval callback check ', () => {
    const callback = jest.fn();
    renderHook(() => useInterval(callback, 1000));

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1100);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });


})
