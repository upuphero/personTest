import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() deleteMe = new EventEmitter<string>();

  deletePerson() {
    this.deleteMe.emit(this.person.id);
  }
}
