describe('strings', () => {
  const text = 'a cute text';
  test('should contain', () => {
    expect(text).toMatch(/cute/);
  });
  test('should not contain', () => {
    expect(text).not.toMatch(/hola/);
  });
  test('should have length', () => {
    expect(text).toHaveLength(11);
  });
});
