import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Produit } from '../../produit.model';

import { ProduitCardComponent } from './produit-card.component';

describe('ProduitCardComponent', () => {
  let component: ProduitCardComponent;
  let fixture: ComponentFixture<ProduitCardComponent>;
  let view: any

  it("Affiche correctement le titre du produit", ()=>{
    fixture = TestBed.createComponent(ProduitCardComponent);
    component = fixture.componentInstance
    component.produit = new Produit(-1, "TEST")
    fixture.detectChanges()
    view = fixture.nativeElement
    expect(view.querySelector("h3").innerText).toContain("TEST")
  });
});
