import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUtilisateurComponent } from './layout-utilisateur.component';

describe('LayoutUtilisateurComponent', () => {
  let component: LayoutUtilisateurComponent;
  let fixture: ComponentFixture<LayoutUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
