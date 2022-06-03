import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUtilisateurComponent } from './formulaire-utilisateur.component';

describe('FormulaireUtilisateurComponent', () => {
  let component: FormulaireUtilisateurComponent;
  let fixture: ComponentFixture<FormulaireUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
