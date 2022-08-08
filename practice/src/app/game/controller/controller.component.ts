import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @ViewChild('startButton') startButton!: HTMLElement;
  @ViewChild('stopButton') stopButton!: HTMLElement;
  @Output('afterStart') afterStart: EventEmitter<number>;
  timer: any;
  counter: number = 0;

  constructor() {
    this.afterStart= new EventEmitter<number>(true);
   }

  ngOnInit(): void {

  }

  start($event: Event) {
    this.timer = setInterval(() => {
      this.afterStart.emit((this.counter++));
    }, 1000);

  }

  stop($event: Event) {
    clearInterval(this.timer);
  }
}
