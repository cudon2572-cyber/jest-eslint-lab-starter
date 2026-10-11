 
const { capitalizeWords } = require('../index');

describe('capitalizeWords', () => {
  test('capitalizes the first letter of each word', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
  });
});