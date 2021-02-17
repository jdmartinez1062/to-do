import CheckList from '../checkListObject';

describe('Test CheckList object creation', () => {
  const checkListTest = CheckList(1, 'Test');

  test('Expect CheckList to be an function', () => {
    expect(typeof CheckList).toBe('function');
  });
  test('Expect mock element from CheckList to return an object', () => {
    expect(typeof checkListTest).toBe('object');
  });
  test('id attribute exists', () => {
    expect(!checkListTest.id).toBe(false);
  });
  test('title attribute exists', () => {
    expect(!checkListTest.title).toBe(false);
  });
  test('created object has status false by default', () => {
    expect(checkListTest.status).toBe(false);
  });
});