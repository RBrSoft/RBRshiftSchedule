import {Component, OnInit} from '@angular/core';
import {Member} from '../member';
import {MemberService} from '../member.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private ms: MemberService
  ) { }

  members: Member[];

  ngOnInit(): void {
    this.getMembers();
  }

  private getMembers(): void {
    const teamId = this.route.snapshot.params['id'];
    this.ms.getMembers(teamId)
      .subscribe((members: Member[]) => this.members = members);
}

}
