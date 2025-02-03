import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: '../../list/list.component.html',
  styleUrl: '../../list/list.component.css'
})
export class ListComponent {

  public heroNames:string[]  = [

    "Spiderman","Iroman","Hulk","Thor","Venom","SuperMan"
  ]

  public heroRemove?:string =""

  public deleteLastHero():void {

     this.heroRemove = this.heroNames.pop()
    

  }

}
