import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


const routes: Routes = [
  { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
  { path: '', pathMatch: 'full', redirectTo: '/members' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
