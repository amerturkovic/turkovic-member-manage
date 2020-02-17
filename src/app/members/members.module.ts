import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './pages/members/members.component';
import { MemberAddComponent } from './pages/member-add/member-add.component';
import { MemberEditComponent } from './pages/member-edit/member-edit.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { DThreeChartComponent } from './components/d-three-chart/d-three-chart.component';
import { AgeFriendsChartComponent } from './pages/age-friends-chart/age-friends-chart.component';


@NgModule({
  declarations: [
    MembersComponent,
    MemberAddComponent,
    MemberEditComponent,
    MemberDetailComponent,
    DeleteConfirmDialogComponent,
    DThreeChartComponent,
    AgeFriendsChartComponent
  ],
  entryComponents: [
    DeleteConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MembersModule { }
