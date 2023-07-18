import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import * as data from './persons.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  people: Person[] = (data as any).default;

  ngOnInit() {
    console.log(this.people);
  }
  deletePerson(id: string) {
    this.people = this.people.filter(person => person.id !== id);
  }
  
}
