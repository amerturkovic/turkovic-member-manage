import { Component, OnInit } from '@angular/core';
import { IMember, DeleteMemberDialogData } from '../../../shared/interfaces';
import { MembersService } from '../../../shared/services/members.service';
import { DeleteConfirmDialogComponent } from '../../components/delete-confirm-dialog/delete-confirm-dialog.component';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: IMember[];

  constructor(
    private membersService: MembersService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getMembers();
  }
  /**
   * TODO: Add dom element to display an error to a user
   * Get the list of currently available members
   * @returns IMember[] json | error
   */
  getMembers(): void {
    this.membersService.getMembers().subscribe(
      members => {
        this.members = members;
        console.log('Get Members Response:', members);
      },
      error => {
        console.log('Get Members Error:', error);
      });
  }
  /**
   * Open Delete Confirmation Dialog
   * @param IMember Member ID
   * @param event click event
   */
  openDeleteDialog(member: IMember, event: any): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: member,
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteMember(result);
    });
  }

  /**
   * TODO: Add dom element to display an error to a user
   * Remove member from the list
   * @param IMember Member ID
   * @returns IMember[] json | error
   */
  deleteMember(member: IMember): void {
    this.membersService.delete(member).subscribe(res => {
      this.members = this.members.filter(m => m !== member);
    },
    error => {
      console.log('Delete Member Error:', error);
    });
  }

}
