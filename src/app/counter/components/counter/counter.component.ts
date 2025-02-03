import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter : {{counter}}</h3>


    <button  (click)="increaseBy(10)">+1</button>
    <button (click)="reset()">reset</button>
    <button  (click)="decrementBy(2)">-1</button>


        
    `,
    standalone: false
})

export class CounterComponent {
    constructor() { }
    
   public counter : number = 10;


   increaseBy(value:number):void{
    this.counter+=value;
   }

   decrementBy(value:number):void{

    this.counter-=value;
   }

   reset():void {
    this.counter =10;
   }



}