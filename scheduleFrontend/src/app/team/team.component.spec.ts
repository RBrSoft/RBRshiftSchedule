import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamComponent} from './team.component';
import {TeamService} from '../team.service';
import {of} from 'rxjs/internal/observable/of';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let compiled;

  beforeEach(async () => {
    const mockTeamService = {
      getTeamForCurrentUser: function() {
        return of(
          [1, 2, 3]
        );
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      providers: [
        {provide: TeamService, useValue: mockTeamService}
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
    expect(listItems.length).toEqual(3);
  });

});
