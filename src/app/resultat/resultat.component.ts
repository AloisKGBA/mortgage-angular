import { Component } from '@angular/core';
import { ResultatTextComponent } from './resultat-text/resultat-text.component';
import { ResultatShowComponent } from './resultat-show/resultat-show.component';

@Component({
  selector: 'app-resultat',
  standalone: true,
  imports: [
    ResultatTextComponent,
    ResultatShowComponent
  ],
  templateUrl: './resultat.component.html',
  styleUrl: './resultat.component.css'
})
export class ResultatComponent {

}
