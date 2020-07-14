import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
  /* aca le digo que todos los parrafos tenga este estilo, pero me lo aplica solo al parrafo que esta en este archivo y no al que esta en app.component.html, porque angular genera un atributo automaticamente y se lo pone al parrafo de este archivo y solo aplicara el estilo a los parrafos que tengan ese atributo. Angular hace esto para asegurarse de que no colisione el estilo de este componente con el de otro componente */
  p {
    color:red;
    font-size: 20px;
  }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
