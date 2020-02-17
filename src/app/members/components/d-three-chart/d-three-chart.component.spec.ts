import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DThreeChartComponent } from './d-three-chart.component';

describe('D3AgeFriendsChartComponent', () => {
  let component: DThreeChartComponent;
  let fixture: ComponentFixture<DThreeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DThreeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DThreeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
