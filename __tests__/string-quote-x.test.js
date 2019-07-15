import quote from '../src/string-quote-x';

describe('testSubject', function() {
  it('wraps an empty string in "', function() {
    expect.assertions(1);
    const s = '';
    const expected = '""';
    expect(quote(s)).toBe(expected);
  });

  it('wraps and converts an empty string object in "', function() {
    expect.assertions(1);
    const s = Object('');
    const expected = '""';
    expect(quote(s)).toBe(expected);
  });

  it('wraps a string in "', function() {
    expect.assertions(1);
    const s = 'hello';
    const expected = '"hello"';
    expect(quote(s)).toBe(expected);
  });

  it('wraps and converts a string object in "', function() {
    expect.assertions(1);
    const s = Object('hello');
    const expected = '"hello"';
    expect(quote(s)).toBe(expected);
  });

  it('escape meta characters', function() {
    expect.assertions(1);
    const s = '\b\t\n\f\r"\\';
    const expected = '"\\b\\t\\n\\f\\r\\"\\\\"';
    expect(quote(s)).toBe(expected);
  });

  it('escape meta characters in string object', function() {
    expect.assertions(1);
    const s = Object('\b\t\n\f\r"\\');
    const expected = '"\\b\\t\\n\\f\\r\\"\\\\"';
    expect(quote(s)).toBe(expected);
  });

  it('arrays are converted to strings', function() {
    expect.assertions(1);
    const s = [1, 2, 3];
    const expected = '"1,2,3"';
    expect(quote(s)).toBe(expected);
  });

  it('objects are converted to strings', function() {
    expect.assertions(1);
    const s = {};
    const expected = '"[object Object]"';
    expect(quote(s)).toBe(expected);
  });
});
