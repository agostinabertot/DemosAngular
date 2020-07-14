import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {
      //todo lo que tenga la directiva appResaltado aparecera en amarillo
      // el.nativeElement.style.backgroundColor = 'yellow';
   }
   
    // aca declaro que se va a recibir el color para resaltar desde el app.component.html
    @Input("appResaltado") nuevoColor: string;

   //el hostListener esta escuchando lo que pasa con el elemento que tiene esta directiva, entonces si el mouse pasa por arriba del componenete (el parrafo que dice hola mundo resaldato) se pone en amarillo
   @HostListener('mouseenter') mouseEntro(){
     // llamo a la funcion resaltar y le paso el nuevoColor que me mandan O (||) el color amarillo, siempre tiene que recibir un color y puede que no me manden nada
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
    }

private resaltar( color:string){
  this.el.nativeElement.style.backgroundColor = 'color';
  
}

}
