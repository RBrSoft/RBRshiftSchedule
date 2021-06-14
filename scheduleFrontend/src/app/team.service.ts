import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Team} from './team';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTeamForCurrentUser(): Observable<Team[]> {
    const url = "api/teams";
    return this.http.get<Team[]>(url);
  }
}
