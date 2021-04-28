import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasUsuariosComponent } from './reservas-usuarios.component';

describe('ReservasUsuariosComponent', () => {
  let component: ReservasUsuariosComponent;
  let fixture: ComponentFixture<ReservasUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
