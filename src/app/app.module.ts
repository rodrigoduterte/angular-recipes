import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DirectionComponent } from './direction/direction.component';
import { RecipeService } from './recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AddrecipeComponent,
    IngredientComponent,
    DirectionComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'addrecipe', component: AddrecipeComponent },
      { path: 'recipe', component: ProfileComponent },
      { path: 'home', component: HomeComponent, outlet: 'modal'},
      { path:  'profile/:id', component:  ProfileComponent}
    ])
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
