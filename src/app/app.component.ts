import { Component, Input } from '@angular/core';
import { InputFormComponent } from './input-form/input-form.component';
import { InputElement1Component } from './input-form/input-element-1/input-element-1.component';
import { InputElement2Component } from './input-form/input-element-2/input-element-2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    InputFormComponent,
    InputElement1Component,
    InputElement2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-calculator';
}
