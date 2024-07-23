import { Component } from '@angular/core';
import { InputFormComponent } from './input-form/input-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    InputFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-calculator';
}
