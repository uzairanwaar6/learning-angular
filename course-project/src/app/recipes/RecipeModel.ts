export class RecipeModel {
  constructor(public name: string,
    public ingredients: IngredientModel[],
    public createdOn: Date
  ) { }

}

export class IngredientModel {
  constructor(public name: string, public quantity: number) { }
}
