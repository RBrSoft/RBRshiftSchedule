import {Injectable} from '@angular/core';
import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  private members = [
    {id: '1', nickname: 'Kunibert'},
    {id: '2', nickname: 'Wilhelm'},
    {id: '3', nickname: 'Sir Stone'},
    {id: '4', nickname: 'Alfonso'},
    {id: '5', nickname: 'Bruce Wayne'},
    {id: '6', nickname: 'Mrs. T'},
    {id: '7', nickname: 'OhneRotkohl'},
    {id: '8', nickname: 'Lustiges Lieschen'},
    {id: '9', nickname: 'Bob'}
  ];

  private membersBub = [
    {id: '1', nickname: 'So'},
    {id: '2', nickname: 'is'},
    {id: '3', nickname: 'et'},
    {id: '4', nickname: 'also'},
    {id: '5', nickname: 'Servus'},
    {id: '6', nickname: 'Oide'},
    {id: '7', nickname: 'Hüttn'},
  ];

  private teams = [
    {id: 'abc', teamName: 'Die Schnullies', members: this.members},
    {id: 'cde', teamName: 'Team1715', members: []},
    {id: 'efg', teamName: 'Alle meine Entchen', members: []},
    {id: 'ghi', teamName: 'Santa\'s Six', members: []},
    {id: 'ijk', teamName: 'Bub\'s Seven', members: this.membersBub}
  ];

  // tslint:disable-next-line:typedef
  createDb() {
    return {
      teams: this.teams,
      members: this.members
    };
  }

  // tslint:disable-next-line:typedef
  get(requestInfo: RequestInfo) {
    const requestBody = this.getBody(requestInfo);

    return requestInfo.utils.createResponse$(() => {
      const response: ResponseOptions = {
        body: requestBody,
        status: STATUS.OK,
        headers: requestInfo.headers,
        url: requestInfo.url
      };
      response.statusText = getStatusText(response.status);
      return response;
    });

  }

  // tslint:disable-next-line:typedef
  private getBody(requestInfo: RequestInfo) {
    const regExpTeams = new RegExp('api\\/users\\/.*\\/teams\\/?');
    const regExpTeamMembers = new RegExp('api\\/teams\\/.*\\/members\\/?');

    if (regExpTeams.test(requestInfo.url)) {
      return this.teams;
    } else if (regExpTeamMembers.test(requestInfo.url)) {
      const team = requestInfo.utils.findById(this.teams, requestInfo.id);
      return team.members;
    }
    else {
      return null;
    }
  }

}
