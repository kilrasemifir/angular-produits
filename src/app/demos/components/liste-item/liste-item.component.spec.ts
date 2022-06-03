import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeItemComponent } from './liste-item.component';

describe('ListeItemComponent', () => {
  let component: ListeItemComponent;
  let fixture: ComponentFixture<ListeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
