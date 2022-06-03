import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fSize = 1;
  monStyle = {
    "background-color": "green",
    "font-size": `1px`
  }
  redBlue = true;
  interval = setInterval(()=>{
    this.redBlue= !this.redBlue;
  }, 1000)
  constructor() {
  }
}
