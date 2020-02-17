import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeFriendsChartComponent } from './age-friends-chart.component';

describe('AgeFriendsChartComponent', () => {
  let component: AgeFriendsChartComponent;
  let fixture: ComponentFixture<AgeFriendsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeFriendsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeFriendsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
