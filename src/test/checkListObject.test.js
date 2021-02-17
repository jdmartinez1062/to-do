import { format } from 'date-fns';
import CheckList from '../checkListObject';

describe('Test CheckList object creation', () => {
  const checkListTrue = CheckList(1, 'Test', true);
  const checkListFalse = CheckList(1, 'Test');

  test('Expect CheckList to be an function', () => {
    expect(typeof CheckList).toBe('function');
  });
  test('Expect mock element from CheckList to return an object', () => {
    expect(typeof checkListTrue).toBe('object');
  });
  test('id attribute exists', () => {
    expect(!checkListTrue.id).toBe(false);
  });
  test('title attribute exists', () => {
    expect(!checkListTrue.title).toBe(false);
  });
  test('status attribute exists', () => {
    expect(!checkListTrue.status).toBe(false);
  });
  test('statusToggle function to exist within the object', () => {
    expect(typeof checkListTrue.statusToggle).toBe('function');
  });
  test('toggle status, if mock element has true in status it returns false', () => {
    checkListTrue.statusToggle();
    expect(checkListTrue.status).toBe(false);
  });
  test('toggle status, if mock element has false in status it returns true', () => {
    checkListFalse.statusToggle();
    expect(checkListFalse.status).toBe(true);
  });
});