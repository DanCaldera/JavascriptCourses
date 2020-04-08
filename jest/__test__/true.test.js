import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Testing Null', () => {
  test('should be null', () => {
    expect(isNull()).toBeNull();
  });
  test('should not be null', () => {
    expect(isTrue()).not.toBeNull();
  });
});

describe('Testing True', () => {
  test('should be true', () => {
    expect(isTrue()).toBeTruthy();
  });
  test('should not be true', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});

describe('Testing False', () => {
  test('should be false', () => {
    expect(isFalse()).toBeFalsy();
  });
  test('should not be false', () => {
    expect(isTrue()).not.toBeFalsy();
  });
});

describe('Testing Undefined', () => {
  test('should be undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
  test('should not be undefined', () => {
    expect(isTrue()).not.toBeUndefined();
  });
});
