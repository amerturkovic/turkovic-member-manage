import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMember, ChartDataModel } from '../../../shared/interfaces';
import { MembersService } from '../../../shared/services/members.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-age-friends-chart',
  templateUrl: './age-friends-chart.component.html',
  styleUrls: ['./age-friends-chart.component.scss']
})
export class AgeFriendsChartComponent implements OnInit, OnDestroy {
  getMembersSub: Subscription;
  chartData: ChartDataModel[];

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
    this.chartData = [];
    this.getMembersSub = this.membersService.getMembers().subscribe(
      members => {
        // loop through members array and grab age and friends props
        members.forEach(obj => {
          this.chartData.push({ name: obj.name, numFriends: obj.friends.split(',').length});
        });
      },
      error => {
        console.log('Get Members Error:', error);
      });
  }

  ngOnDestroy() {
    this.getMembersSub.unsubscribe();
  }

}
