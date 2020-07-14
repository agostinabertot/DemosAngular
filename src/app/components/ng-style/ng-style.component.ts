import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- <p [ngStyle]="{'font-size': tamanio + 'px', 'color':'red'}"> -->
   <!-- si tengo un solo estilo para poner lo puedo hacer de la siguiente manera, si ademas de el tamanio quiero ponerle color u otra caracteristica ya tengo que usar un ngStyle como esta arriba -->
    <p [style.fontSize.px]="tamanio"> 
    Hola mundo... esta es una etiqueta
    </p>

  <button class="btn btn-primary mr-3" (click)="tamanio = tamanio + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
    <i class="fa fa-minus"></i>
  </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
    
  tamanio: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
