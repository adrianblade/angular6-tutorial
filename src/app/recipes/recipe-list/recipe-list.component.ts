import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe',
                'This is a simply test',
                'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg'),
    new Recipe( 'A Test Recipe',
                'This is a simply test',
                'https://cocina-casera.com/wp-content/uploads/2018/01/Tarta-de-oreo-2.jpg')          
  ];

  constructor() { }

  ngOnInit() {
  }

}
