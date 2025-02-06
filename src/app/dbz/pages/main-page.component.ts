import { Component, OnInit } from '@angular/core';
import {Character} from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: './main.css',
  standalone:false

})

export class MainPageComponent {

  public characters:Character[] = [
    {
      name:"Goku",
      power:100000
    },
    {
      name:"Krillin",
      power:1000,
    },
    {
      "name": "Vegeta",
      "power": 18000
    }, {
      "name": "Piccolo",
      "power": 3500
    },
    {
      "name": "Frieza",
      "power": 530000
    },
    {
      "name": "Gohan",
      "power": 2800
    },
    {
      "name": "Broly",
      "power": 1400000
    }

  ]

  onNewCharacter(character:Character){




    this.characters.push(character);

    console.log(character);
  }

}
