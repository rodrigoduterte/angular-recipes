import { Component } from '@angular/core';
import { Category } from './recipe.model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
  parentCategory: string;
  values() {
    return Object.keys(Category).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
