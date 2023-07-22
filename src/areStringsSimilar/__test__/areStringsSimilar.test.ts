import { areStringsSimilar } from '..';

describe('areStringsSimilar', () => {
  it('should return true for similar strings', () => {
    const str1 = '  HéllO  my  friend!   ';
    const str2 = 'hello my friend!';
    const result = areStringsSimilar(str1, str2);
    expect(result).toBe(true);
  });

  it('should return false for dissimilar strings', () => {
    const str1 = 'hello';
    const str2 = 'world';
    const result = areStringsSimilar(str1, str2);
    expect(result).toBe(false);
  });

  it('should handle empty strings', () => {
    const str1 = '';
    const str2 = '';
    const result = areStringsSimilar(str1, str2);
    expect(result).toBe(true);
  });

  it('should handle strings with only spaces', () => {
    const str1 = '     ';
    const str2 = '';
    const result = areStringsSimilar(str1, str2);
    expect(result).toBe(true);
  });
});
