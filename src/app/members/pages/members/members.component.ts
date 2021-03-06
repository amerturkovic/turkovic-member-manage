import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMember } from '../../../shared/interfaces';
import { MembersService } from '../../../shared/services/members.service';
import { DeleteConfirmDialogComponent } from '../../components/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
  members: IMember[];
  getMembersSub: Subscription;
  deleteMemberSub: Subscription;

  constructor(
    private membersService: MembersService,
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
    this.getMembersSub = this.membersService.getMembers().subscribe(
      members => {
        this.members = members;
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
    this.deleteMemberSub = this.membersService.delete(member).subscribe(res => {
      this.members = this.members.filter(m => m !== member);
    },
    error => {
      console.log('Delete Member Error:', error);
    });
  }

  ngOnDestroy() {
    if ( this.deleteMemberSub ) {
        this.deleteMemberSub.unsubscribe();
    }
    this.getMembersSub.unsubscribe();
  }

}
