import { greet } from './greet';

describe('greet', () => {
  it('should include the name into the message', () => {
    expect(greet('mosh')).toContain('mosh');
  });
});
