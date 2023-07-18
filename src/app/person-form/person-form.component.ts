import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  personForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  @Output() newPerson = new EventEmitter<Person>();

  ngOnInit(): void {
  }

  addPerson() {
    const idControl = this.personForm.get('id');
    const firstNameControl = this.personForm.get('firstName');
    const lastNameControl = this.personForm.get('lastName');

    if (idControl && firstNameControl && lastNameControl) {
      const newPerson = new Person();
      newPerson.id = idControl.value ?? '';
      newPerson.firstName = firstNameControl.value ?? '';
      newPerson.lastName = lastNameControl.value ?? '';
      
      this.newPerson.emit(newPerson);
      this.personForm.reset();
    }
  }
  
}
