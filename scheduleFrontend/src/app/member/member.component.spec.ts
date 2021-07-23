import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberComponent} from './member.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MemberService} from '../member.service';
import {of} from 'rxjs/internal/observable/of';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async () => {
    const mockMemberService = {
       getMembers: function () {
         return of();
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
