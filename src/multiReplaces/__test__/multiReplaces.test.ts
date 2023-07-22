import { multiReplace } from '..';

describe('multiReplace', () => {
  it('should replace all occurrences of the patterns with the corresponding values', () => {
    const str = 'foo biz foobiz';
    const replace = {
      foo: 'biz',
    };
    const result = multiReplace(str, replace);
    expect(result).toBe('biz biz bizbiz');
  });

  it('should return the original string if the replace object is empty', () => {
    const str = 'foo biz baz';
    const replace = {};
    const result = multiReplace(str, replace);
    expect(result).toBe(str);
  });

  it('should handle multiple replacements correctly', () => {
    const str = 'foo biz baz';
    const replace = {
      foo: '1',
      biz: '2',
      baz: '3',
    };
    const result = multiReplace(str, replace);
    expect(result).toBe('1 2 3');
  });
});
