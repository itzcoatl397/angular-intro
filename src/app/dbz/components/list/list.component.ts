import { Component,Input} from '@angular/core';
import {Character} from '../../interfaces/character.interface';
import {list} from 'postcss';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input()
  public characterList:Character[] = []

  protected readonly list = list;
}
