import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('You have clicked the div!');
  }
}
