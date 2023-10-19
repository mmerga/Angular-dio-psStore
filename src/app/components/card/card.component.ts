import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  imgUrl: string = '../../assets/images/bt-1.jpg'
  @Input()
  tag: string = 'New'
  @Input()
  text: string = 'Play is Now!'
  @Input()
  plataform: Array<string> = ['PC', 'PS4', 'PS5']
  @Input()
  price: string = '299.99'

  constructor() { }

  ngOnInit(): void {
  }

}
