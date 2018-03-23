import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  image: string = './favicon.ico';
  textInterpolation: string = 'lorem ipsaum........';
  text: string;
  status: boolean = true;
  texts: string[] = ['un', 'deux', 'trois'];
	
	setImageVisible(){
		this.status = !this.status;
	}
}
