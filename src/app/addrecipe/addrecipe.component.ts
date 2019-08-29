import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Recipe, Category } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { HomeComponent } from '../home/home.component';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css'],
  providers: [RecipeService, {provide: Array, useValue: "dummy"}]
})
export class AddrecipeComponent implements OnInit {
  public recipeForm: FormGroup;
  recipe: Recipe;
  recipes: Recipe[];

  constructor(private _fb: FormBuilder, private appRef: ApplicationRef) {}

  ngOnInit() {
    this.recipeForm = this._fb.group({
      recipeName: [''],
      recipeCategory: [''],
      recipePhoto: [''],
      ingredients: this._fb.array([
        this.initIngredient()
      ]),
      directions: this._fb.array([
        this.initDirection()
      ])
    });
  }

  save(recipe: Recipe) {
    this.recipe = <Recipe> JSON.parse( JSON.stringify(recipe))
    HomeComponent.recipes.push(this.recipe);
    //this.appRef.tick();
    this.recipeForm.reset();
  }

  values() {
    return Object.keys(Category).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }

  initIngredient() {
    // initialize our ingredient
    return this._fb.group({
      qty: [''],
      um: [''],
      ingredientName: ['']
    });
  }

  initDirection() {
    return this._fb.group({
      task: ['']
    });
  }

  addIngredient() {
    // add address to the list
    const control = <FormArray>this.recipeForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  removeIngredient(i: number) {
    // add address to the list
    const control = <FormArray>this.recipeForm.controls['ingredients'];
    control.removeAt(i);
  }

  addDirection() {
    // add address to the list
    const control = <FormArray>this.recipeForm.controls['directions'];
    control.push(this.initDirection());
  }

  removeDirection(i: number) {
    // add address to the list
    const control = <FormArray>this.recipeForm.controls['directions'];
    control.removeAt(i);
  }
}
