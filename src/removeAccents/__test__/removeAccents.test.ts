import { removeAccents } from '..';

describe('removeAccents', () => {
  it('should remove all accents from a string', () => {
    const str = 'Héctor';
    const result = removeAccents(str);
    expect(result).toBe('Hector');
  });

  it('should handle strings with multiple accented characters', () => {
    const str = 'résumé';
    const result = removeAccents(str);
    expect(result).toBe('resume');
  });

  it('should return the original string if there are no accents', () => {
    const str = 'hello';
    const result = removeAccents(str);
    expect(result).toBe(str);
  });

  it('should handle empty strings', () => {
    const str = '';
    const result = removeAccents(str);
    expect(result).toBe(str);
  });
});
