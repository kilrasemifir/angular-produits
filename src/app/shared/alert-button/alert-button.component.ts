import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  
  @Input() message: string = ""
  @Input() label: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Affiche le message dans une alerte de votre navigateur
   */
  onClick() {
    alert(this.message)
  }

}
