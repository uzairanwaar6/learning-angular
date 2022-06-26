import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindings',
  templateUrl: './two-way-bindings.component.html',
  styleUrls: ['./two-way-bindings.component.css']
})
export class TwoWayBindingsComponent implements OnInit {

  username: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  resetValues(event: Event) {
    this.username = '';
  }
}
