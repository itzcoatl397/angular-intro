import { Component } from '@angular/core';



@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../../hero/hero.component.html',
  styleUrl: '../../hero/hero.component.css',
  standalone: false
})
export class HeroComponent {

  public name:string ="spiderman"
  public age:number = 45;
  
  
  get CapitalizeName():string {
    return this.name.toUpperCase()
  }



  public  getHeroDescription(): string{

    return `${this.name} - ${this.age}`
  }

  
  changeHero():void {
    //U:
    this.name ="Ironman";
  }

  changeAge():void {
    this.age =50;
  }

  resetForm(){

    this.name="spiderman"
    this.age =45;
  }


}
