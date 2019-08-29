import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { Recipe, Category } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RecipeService, {provide: Array, useValue: "dummy"}]
})
export class HomeComponent implements OnInit {
  @Input() childCategory: string;

  static recipes: Recipe[];
  static appRef: ApplicationRef;
  subscription: Subscription;
  constructor(private recipeService: RecipeService, appRef: ApplicationRef) {
  }

  getRecipes(): Recipe[] {
    return HomeComponent.recipes;
  }

  values() {
    return Object.keys(Category).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }

  ngOnInit() {
    this.recipeService.getAll().subscribe((recipeList) => {
      HomeComponent.recipes = recipeList;
    })
  }
}
