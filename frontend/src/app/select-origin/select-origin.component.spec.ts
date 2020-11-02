import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOriginComponent } from './select-origin.component';

describe('SelectOriginComponent', () => {
  let component: SelectOriginComponent;
  let fixture: ComponentFixture<SelectOriginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOriginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
