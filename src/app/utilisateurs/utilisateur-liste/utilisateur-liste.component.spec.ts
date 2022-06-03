import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurListeComponent } from './utilisateur-liste.component';

describe('UtilisateurListeComponent', () => {
  let component: UtilisateurListeComponent;
  let fixture: ComponentFixture<UtilisateurListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
