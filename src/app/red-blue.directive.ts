import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBlue]'
})
export class RedBlueDirective {

  @Input() color = 'red';
  constructor(private el: ElementRef) { 
    const child = document.createElement("div")
    child.innerHTML= "Hello je suis créer par une directive Angular"
    this.el.nativeElement.appendChild(child)
  }
  
  @HostListener("mouseenter") onEnter() {
    this.el.nativeElement.style.backgroundColor = this.color
  }
  
  @HostListener('click') onClick(){
    alert("Je suis une alert de a directive redBlue")
  }

}
