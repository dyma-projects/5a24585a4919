import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color: string = 'white';

  changeColor(color: string): void{
  	console.log('changeColor ' + color);
  	this.color = color;
  }
}
