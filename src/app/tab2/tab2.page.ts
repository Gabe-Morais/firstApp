import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public valor1: string;
  public valor2: string;
  public result: number;

  constructor() { }

  calcular() {
    this.result = (parseFloat(this.valor1) + parseFloat(this.valor2));
    console.log(this.result)

  }

}

