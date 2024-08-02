import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element-1',
  standalone: true,
  imports: [],
  templateUrl: './input-element-1.component.html',
  styleUrl: './input-element-1.component.css'
})
export class InputElement1Component implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
      this.checkamount();
  }

  checkamount(): void {
    let amount = document.getElementById("Amount") as HTMLInputElement;
    if (amount.value === "") {
      alert("Cest zooooooooooooooo");
    }
  }
}
