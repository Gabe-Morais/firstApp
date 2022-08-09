import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

   calcular(valor1:number, valor2:number) {
        console.log(valor1 + valor2);

  }

}

