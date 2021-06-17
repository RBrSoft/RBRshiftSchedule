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
      {id: 'abc', teamName: 'Die Schnullies'},
      {id: 'cde', teamName: 'Team1715'},
      {id: 'efg', teamName: 'Alle meine Entchen'},
      {id: 'ghi', teamName: 'Santa\'s Six'},
      {id: 'ijk', teamName: 'Oceans Eleven'}
    ];

    const members = [
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

    return {teams, members};
  }
}
