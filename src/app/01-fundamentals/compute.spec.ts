import { compute} from './compute';

describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment if input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
