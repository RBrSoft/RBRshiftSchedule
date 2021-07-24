import {Team} from './team';

describe('Team', () => {
  it('should create an instance', () => {
    expect(new Team('999', 'Test Team')).toBeTruthy();
  });
});
