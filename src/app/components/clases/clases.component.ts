import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

alerta: string = 'alert-danger'

propiedades: Object = {
  danger: false
}

loading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;
//despues de que pasen 3 segundos me cambia el valor de loading
    setTimeout( () => this.loading =false, 3000 )
  }

}
