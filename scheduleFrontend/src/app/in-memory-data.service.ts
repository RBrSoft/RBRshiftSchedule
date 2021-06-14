import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const teams = [
      {id: "abc", teamName: "Die Schnullies"},
      {id: "cde", teamName: "Team1715"}
    ];

    const members = [
      {id: "1234", nickname: "Kunibert"},
      {id: "4567", nickname: "Wilhelm"},
    ];

    return {teams, members};
  }
}
