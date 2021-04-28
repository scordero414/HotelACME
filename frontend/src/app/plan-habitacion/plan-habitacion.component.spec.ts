import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanHabitacionComponent } from './plan-habitacion.component';

describe('PlanHabitacionComponent', () => {
  let component: PlanHabitacionComponent;
  let fixture: ComponentFixture<PlanHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
