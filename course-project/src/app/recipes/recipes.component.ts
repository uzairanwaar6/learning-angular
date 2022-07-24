import { Component, OnInit } from '@angular/core';
import { IngredientModel, RecipeModel } from './RecipeModel';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.recipes.push(new RecipeModel('Recipe 1', [
      new IngredientModel('Ingredient 1', 1),
      new IngredientModel('Ingredient 2', 2),
      new IngredientModel('Ingredient 3', 3),
    ],
      new Date()
    ));

    this.recipes.push(new RecipeModel('Recipe 2', [
      new IngredientModel('Ingredient 1', 1),
      new IngredientModel('Ingredient 2', 2),
      new IngredientModel('Ingredient 3', 3),
    ],
      new Date()
    ));

    this.recipes.push(new RecipeModel('Recipe 3', [
      new IngredientModel('Ingredient 1', 1),
      new IngredientModel('Ingredient 2', 2),
      new IngredientModel('Ingredient 3', 3),
    ],
      new Date()
    ));

    this.recipes.push(new RecipeModel('Recipe 4', [
      new IngredientModel('Ingredient 1', 1),
      new IngredientModel('Ingredient 2', 2),
      new IngredientModel('Ingredient 3', 3),
    ],
      new Date()
    ));
  }

}
