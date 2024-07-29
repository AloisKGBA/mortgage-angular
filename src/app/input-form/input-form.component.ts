import { Component } from '@angular/core';
import {InputElement1Component} from './input-element-1/input-element-1.component'
import { InputElement2Component } from './input-element-2/input-element-2.component';
import { InputElement3Component } from './input-element-3/input-element-3.component';
@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    InputElement1Component,
    InputElement2Component,
    InputElement3Component
  ],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {

}
