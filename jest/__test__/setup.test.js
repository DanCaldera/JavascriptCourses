// After Test
afterEach(() => {
  console.log('After Test');
});

//After All
afterAll(() => {
  console.log('After All Tests');
});

//BeforeAll
beforeAll(() => {
  console.log('Before All tests');
});

//BeforeEach
beforeEach(() => {
  console.log('Before Test');
});

describe('prepare before shut', () => {
  test('should true', () => {
    expect(true).toBeTruthy();
  });
});
