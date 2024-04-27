import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    CommonModule,
    PropertyBindingComponent,
    FormsModule,
    EventBindingComponent,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DatabindingComponent {
  string = 'This is a string';
  number = 10;
  attachClass = false;
  backgroundColor = 'lightblue';

  firstName = 'John';
  lastName = 'Doe';

  constructor() {
    setTimeout(() => {
      this.string = 'The number changed →';
      this.number += 5;
      this.attachClass = true;
    }, 3000);
  }

  onClick(event: Event) {
    console.log(event);
    alert('Clicked!');
  }
}
