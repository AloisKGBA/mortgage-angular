import { Component } from '@angular/core';
import {InputElement1Component} from './input-element-1/input-element-1.component'
import { InputElement2Component } from './input-element-2/input-element-2.component';
import { InputElement3Component } from './input-element-3/input-element-3.component';
import { InputElement4Component } from './input-element-4/input-element-4.component';
import { TitreComponent } from './titre/titre.component';
@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    InputElement1Component,
    InputElement2Component,
    InputElement3Component,
    InputElement4Component,
    TitreComponent
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {

}
