import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../RecipeModel';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() recipe: RecipeModel
  constructor() { }

  ngOnInit(): void {
  }

}
