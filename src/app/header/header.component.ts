import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private name: string = "Enter Text Here...";

  constructor() { }

  ngOnInit() {
  }

  private openCart(): void {
    alert("HOLA");
  }

}