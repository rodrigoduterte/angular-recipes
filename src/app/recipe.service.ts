import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import recipess from "../assets/document.json";
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private recipes: Recipe[]) {
    this.recipes = <Recipe[]>JSON.parse(JSON.stringify(recipess));
  }

  getAll(): Observable<Recipe[]> {
    return of<Recipe[]>(this.recipes);
  }
}
