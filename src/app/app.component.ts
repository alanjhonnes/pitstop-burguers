import { Component } from '@angular/core';
import {TypeToForm } from './shared/types/type-to-form.type';
import { FormControl, FormGroup } from '@angular/forms';

export interface BurguerForm {
  breadType: string;
  cheeseType: string;
  additionals: BurguerAdditionals;
}

export interface BurguerAdditionals {
  lettuce: boolean;
  tomato: boolean;
  purpleOnion: boolean;
  pickles: boolean;
  bacon: boolean;
  mayonaise: boolean;
  catupiry: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    const additionalsFormConfig: TypeToForm<BurguerAdditionals> = {
      lettuce: new FormControl(false),
      tomato: new FormControl(false),
      purpleOnion: new FormControl(false),
      pickles: new FormControl(false),
      bacon: new FormControl(false),
      mayonaise: new FormControl(false),
      catupiry: new FormControl(false),
    };
    const formConfig: TypeToForm<BurguerForm> = {
      additionals: new FormGroup(additionalsFormConfig),
      breadType: new FormControl(null),
      cheeseType: new FormControl(null),
    };

    this.form = new FormGroup(formConfig);
  }
}
