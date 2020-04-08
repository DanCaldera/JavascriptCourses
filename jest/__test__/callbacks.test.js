import { callbackHell } from '../callbacks';

describe('testing a callback', () => {
  test('should be a callback', (done) => {
    const otherCallback = (data) => {
      expect(data).toBe('Hello JVcript!');
      done();
    };
    callbackHell(otherCallback);
  });

  test('should be not be callback', (done) => {
    const otherCallback = (data) => {
      expect(data).not.toBe('Hello JVXcript!');
      done();
    };
    callbackHell(otherCallback);
  });
});
