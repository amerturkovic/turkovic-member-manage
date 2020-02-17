import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMember } from '../../../shared/interfaces';
import { MembersService } from '../../../shared/services/members.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-age-friends-chart',
  templateUrl: './age-friends-chart.component.html',
  styleUrls: ['./age-friends-chart.component.scss']
})
export class AgeFriendsChartComponent implements OnInit, OnDestroy {
  members: IMember[];
  getMembersSub: Subscription;

  constructor(
    private membersService: MembersService) { }

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

  ngOnDestroy() {
    this.getMembersSub.unsubscribe();
  }

}
