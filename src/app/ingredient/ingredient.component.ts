import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input('group')
  public ingredientForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
