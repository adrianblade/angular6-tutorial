import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a simply test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg'),
    new Recipe('A Test Recipe',
      'This is a other test',
      'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
