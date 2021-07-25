import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Member} from './member';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient
  ) { }

  getMembers(teamId: string): Observable<Member[]> {
    console.log('Fetching members for team: ' + teamId);
    const url = 'api/teams/' + teamId + '/members/';
    return this.http.get<Member[]>(url);
  }
}
