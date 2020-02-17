import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './pages/members/members.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { MemberAddComponent } from './pages/member-add/member-add.component';
import { MemberEditComponent } from './pages/member-edit/member-edit.component';
import { AgeFriendsChartComponent } from './pages/age-friends-chart/age-friends-chart.component';

const routes: Routes = [
  { path: '', component: MembersComponent },
  { path: 'add', component: MemberAddComponent },
  { path: 'chart', component: AgeFriendsChartComponent },
  { path: 'edit/:id', component: MemberEditComponent },
  { path: 'member/:id', component: MemberDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
