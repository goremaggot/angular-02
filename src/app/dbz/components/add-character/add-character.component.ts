import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public addCharacter: Character = {
    name: "",
    power: 0
  }
  emitCharacter(): void {
    debugger;
    console.log(this.addCharacter)
    this.onNewCharacter.emit(this.addCharacter)
  }
}
