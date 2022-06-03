import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = "John";
  age: number = 0;
  imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
  job: string = ""

  constructor() {
    setInterval(()=>this.age++, 1000)
  }

  ngOnInit(): void {
  }

}
