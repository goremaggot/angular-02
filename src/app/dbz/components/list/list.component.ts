import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public emitDeleteIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList: Character[] = [];

  onDeleteCharacter(id: string): void {
    this.emitDeleteIndex.emit(id);
  }
}
