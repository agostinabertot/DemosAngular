import { Component, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
    
    <app-css></app-css>

    <app-clases></app-clases>

    <p [appResaltado]="'blue'">
        Hola mundo Resaltado
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  constructor() { 
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngOnChanges (){
    console.log("ngOnChanges")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(){
    console.log(" ngAfterContentInit")
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy")
  }
}
