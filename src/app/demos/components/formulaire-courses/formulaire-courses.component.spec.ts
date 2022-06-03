import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCoursesComponent } from './formulaire-courses.component';

describe('FormulaireCoursesComponent', () => {
  let component: FormulaireCoursesComponent;
  let fixture: ComponentFixture<FormulaireCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
