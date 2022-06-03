import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurFormulaireComponent } from './utilisateur-formulaire.component';

describe('UtilisateurFormulaireComponent', () => {
  let component: UtilisateurFormulaireComponent;
  let fixture: ComponentFixture<UtilisateurFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
