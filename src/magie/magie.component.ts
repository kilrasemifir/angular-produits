import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magie',
  templateUrl: './magie.component.html',
  styleUrls: ['./magie.component.css']
})
export class MagieComponent implements OnInit {

  hidden: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  afficherCacher(){
    this.hidden = !this.hidden
  }

}
