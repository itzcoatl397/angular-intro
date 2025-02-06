import {Component, Output,EventEmitter} from '@angular/core';
import  {FormsModule} from '@angular/forms'
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character:Character = {
    name:"",
    power:0

  }




  emitCharacter(){

    if(this.character.name.trim().length  ===  0){ return}

    this.onNewCharacter.emit(this.character);

    console.log(this.character)

    this.character.name = '';
    this.character.power = 0;
  }




}
