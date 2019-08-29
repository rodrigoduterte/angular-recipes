import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {
  @Input('group')
  public directionForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
