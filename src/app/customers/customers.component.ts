import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  activeMode : DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;
  constructor() { }

  ngOnInit() {
    this.activeMode = DisplayModeEnum.Card;
  }
  tittle = "Customer";
  card = "Card View";
  list = "List View";
  map = "Map View";
  newCustomer = "New Customer";
  SwitchDiplay(mode: DisplayModeEnum) {
    this.activeMode = mode;
  }
}
enum DisplayModeEnum {
  Card = 0,
  List = 1,
  Map = 2
}
