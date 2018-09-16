import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simply test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg'),
    new Recipe('A Test Recipe',
      'This is a other test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
