import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-structures-and-styling',
  templateUrl: './conditional-structures-and-styling.component.html',
  styleUrls: ['./conditional-structures-and-styling.component.css'],
})
export class ConditionalStructuresAndStylingComponent implements OnInit {
  displayDetails: boolean = false;
  userClicks: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  btnDisplayDetails_click($event: Event) {
    this.displayDetails = !this.displayDetails;

    this.userClicks.push(new Date().toTimeString() + '\t\t' + (this.displayDetails ? 'Show' : 'Hide'));
  }
}
