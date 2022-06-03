import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-item',
  templateUrl: './liste-item.component.html',
  styleUrls: ['./liste-item.component.css']
})
export class ListeItemComponent implements OnInit {

  fruits: string[] = [
    "Pomme", "Poire", "Banane"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number, fruit: string) {
    alert(index + fruit)
  }

}
