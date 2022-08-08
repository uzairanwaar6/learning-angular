import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  numbers: number[] = []
  constructor() { }

  ngOnInit(): void {
  }


  generateComponents(output: number) {
    console.log(output);
    this.numbers.push(output);
  }
}
