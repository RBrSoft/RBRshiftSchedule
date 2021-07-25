import {Member} from './member';

describe('Member', () => {
  it('should create an instance', () => {
    expect(new Member('999', 'New Member')).toBeTruthy();
  });
});
