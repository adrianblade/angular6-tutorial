import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simply test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 1)
      ]),
    new Recipe('A Test Recipe',
      'This is a other test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
