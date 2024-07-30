import { Component, Input } from '@angular/core';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultatComponent } from './resultat/resultat.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    InputFormComponent,
    ResultatComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mortgage-calculator';
}
