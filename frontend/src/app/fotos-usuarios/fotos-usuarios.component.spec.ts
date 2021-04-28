import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosUsuariosComponent } from './fotos-usuarios.component';

describe('FotosUsuariosComponent', () => {
  let component: FotosUsuariosComponent;
  let fixture: ComponentFixture<FotosUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
