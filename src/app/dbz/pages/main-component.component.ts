import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-component.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) {

  }
  get getCharacters() {
    return this.dbzService.characters
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.handleRemoveCharacterById(id);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.handleNewCharacter(character);
  }
}
