import {TestBed} from '@angular/core/testing';

import {TeamService} from './team.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/internal/observable/of';
import {Team} from './team';

describe('TeamService', () => {
  const teamTestData = [
    new Team('123', 'Team Name 1'),
    new Team('456', 'Team Name 2')
  ];
  let mockHttpClient: HttpClient;
  let service: TeamService;

  mockHttpClient = {
    get: function() {
      return of(teamTestData);
    }
  } as any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockHttpClient}
      ]
    });
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTeamForCurrentUser', () => {

    it('should return an Observable<Team[]>', (done) => {
      // when
      const result = service.getTeamForCurrentUser();
      // then
      result.subscribe(teams => {
          expect(teams.length).toEqual(teamTestData.length);
          done();
      });
    });

    it('should call GET api/teams', (done) => {
      // given
      spyOn(mockHttpClient, 'get').and.callThrough();
      // when
      service.getTeamForCurrentUser().subscribe(() => {});
      // then
      expect(mockHttpClient.get).toHaveBeenCalledWith('api/teams');
      done();
    });

  });

});
