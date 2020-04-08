import { fruits, colors } from '../arrays';

describe('it contains', () => {
  test('should be a fruit', () => {
    expect(fruits()).toContain('Apple');
  });
  test('should not be a fruit', () => {
    expect(fruits()).not.toContain('Brocoli');
  });
  test('should be lenght of', () => {
    expect(fruits()).toHaveLength(4);
  });

  test('should use colors of', () => {
    expect(colors()).toContain('red');
  });
});
