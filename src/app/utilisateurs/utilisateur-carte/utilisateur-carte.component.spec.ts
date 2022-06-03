import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurCarteComponent } from './utilisateur-carte.component';

describe('UtilisateurCarteComponent', () => {
  let component: UtilisateurCarteComponent;
  let fixture: ComponentFixture<UtilisateurCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
