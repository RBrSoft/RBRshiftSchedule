import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamComponent} from './team.component';
import {TeamService} from '../team.service';
import {of} from 'rxjs/internal/observable/of';
import {Team} from '../team';
import {RouterTestingModule} from '@angular/router/testing';

describe('TeamComponent', () => {
  const teamTestData = [
    new Team('123', 'Team Name 1'),
    new Team('456', 'Team Name 2')
  ];
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let compiled;

  beforeEach(async () => {
    const mockTeamService = {
      getTeamForCurrentUser: function() {
        return of(teamTestData);
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      providers: [
        {provide: TeamService, useValue: mockTeamService}
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the heading "Deine Teams"', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Deine Teams:');
  });

  it('should render one team card per team', () => {
    const listItems = compiled.querySelectorAll('.card-list li');
    expect(listItems.length).toEqual(teamTestData.length);

    const firstCardHeading = listItems[0].querySelector('h3');
    expect(firstCardHeading.textContent).toContain('Team Name 1');

    const firstCardRouterLink = listItems[1].querySelector('a');
    console.log(firstCardRouterLink);
    expect(firstCardRouterLink.textContent).toContain('Members');
    expect(firstCardRouterLink.getAttribute('href'))
      .toEqual('/teams/456/members');
  });

});
