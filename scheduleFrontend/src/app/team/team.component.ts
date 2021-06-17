import {Component, OnInit} from '@angular/core';
import {Team} from '../team';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(
    private teamService: TeamService
  ) {

  }

  teams: Team[];

  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamService.getTeamForCurrentUser().subscribe(
      teams => this.teams = teams
    );

  }
}
