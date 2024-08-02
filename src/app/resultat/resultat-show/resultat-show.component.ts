import { Component } from '@angular/core';
import { ShowCalculComponent } from './show-calcul/show-calcul.component';

@Component({
  selector: 'app-resultat-show',
  standalone: true,
  imports: [
    ShowCalculComponent
  ],
  templateUrl: './resultat-show.component.html',
  styleUrl: './resultat-show.component.css'
})
export class ResultatShowComponent {

}
