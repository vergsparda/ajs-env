import demo from './app';

test('return', () => {
  const expected = 'Hello';
  const result = demo('Hello');

  expect(result).toBe(expected);
});
