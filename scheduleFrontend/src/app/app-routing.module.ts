import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MemberComponent} from './member/member.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {path: 'teams/:id/members', component: MemberComponent},
  {path: 'teams', component: TeamComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
