describe('Comparadores comunes', () => {
  const user = {
    name: 'Daniel',
    lastName: 'Caldera',
  };

  const user2 = {
    name: 'Daniel',
    lastName: 'Caldera',
  };

  const user3 = {
    name: 'Valeria',
    lastName: 'Oceguera',
  };

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });

  test('desigualdad de elementos', () => {
    expect(user).not.toEqual(user3);
  });
});
