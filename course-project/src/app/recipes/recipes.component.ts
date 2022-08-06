import { Component, OnInit } from '@angular/core';
import { IngredientModel, RecipeModel } from './RecipeModel';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: RecipeModel[] = [];
  editRecipe: RecipeModel = new RecipeModel('', [], new Date());

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

  delete(recipe: RecipeModel): void {
    this.recipes = this.recipes.filter((filterRecipe: RecipeModel) => {
      return recipe.name.toLowerCase() !== filterRecipe.name.toLowerCase();
    });
  }

  onEdit_click(recipe: RecipeModel) {
    this.editRecipe = { ...recipe };
  }

  btnSave_click(index: number) {
    this.recipes[index] = { ...this.editRecipe };
  }

}
