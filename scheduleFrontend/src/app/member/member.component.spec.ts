import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberComponent} from './member.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MemberService} from '../member.service';
import {of} from 'rxjs/internal/observable/of';
import {Member} from '../member';

describe('MemberComponent', () => {
  const membersTestData = [
    new Member('321', 'Member Name 1'),
    new Member('654', 'Member Name 2')
  ];
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let compiled;

  beforeEach(async () => {
    const mockMemberService = {
       getMembers: function () {
         return of(membersTestData);
      }
    };
    await TestBed.configureTestingModule({
      declarations: [ MemberComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: MemberService, useValue: mockMemberService} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the heading "Team members"', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Team members');
  });

  it('should render one list item per member', () => {
    const listItems = compiled.querySelectorAll('.members li');
    expect(listItems.length).toEqual(membersTestData.length);

    const nickname = listItems[0].querySelector('span');
    console.log(nickname);
    expect(nickname.textContent).toContain('Member Name 1');

  });
});
