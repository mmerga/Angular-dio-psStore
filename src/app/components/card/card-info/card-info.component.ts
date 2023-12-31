import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input()
  text: string = 'Buy it'
  @Input()
  plataform: Array<string> = ['PC', 'PC'] 
  @Input()
  price: string = 'FREE' 

  constructor() { }

  ngOnInit(): void {
  }

}
