import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tag',
  templateUrl: './card-tag.component.html',
  styleUrls: ['./card-tag.component.css']
})
export class CardTagComponent implements OnInit {

  @Input()
  tag: string = 'Exclusive';

  constructor() { }

  ngOnInit(): void {
  }

}
