import { Component, OnInit } from '@angular/core';
import { fakeData } from '../../../fakeData/fakeData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Array<any> = fakeData
  
  constructor() { }

  ngOnInit(): void {
  }

}
