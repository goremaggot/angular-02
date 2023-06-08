import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Trunks",
      power: 10000
    },
    {
      id: uuid(),
      name: "Vegueta",
      power: 89000
    },
  ];

  handleNewCharacter(character: Character): void {
    console.log(`Padre ${JSON.stringify(character)}`)
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter)
  }


  handleRemoveCharacterById(id: string): void {
    console.log(`id ${id}`)
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
