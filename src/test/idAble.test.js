import idAble from '../idAble';

describe('idAble function returns a proper string to use as an ID', () => {
  const string = 'IsTest';

  test('idAble should return the string with no spaces and separated by "-"', () => {
    expect(idAble(string)).toBe('is-test');
  });
});