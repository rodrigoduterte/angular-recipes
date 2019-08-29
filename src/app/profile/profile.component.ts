import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { RecipeService } from '../recipe.service';
import { HomeComponent } from '../home/home.component'
import { Recipe } from '../recipe.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [RecipeService, {provide: Array, useValue: "dummy"}]
})
export class ProfileComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAll().subscribe((recipeList) => {
      this.recipes = recipeList;
    })

    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.recipe = HomeComponent.recipes.find((item, index) => +params.get('id') == index);
    }); 
  }

  
}
