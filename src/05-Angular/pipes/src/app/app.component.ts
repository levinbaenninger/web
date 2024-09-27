import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { MultiplyPipe } from '../pipes/multiply.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, MultiplyPipe, FilterPipe]
})
export class AppComponent {
  text = 'Some text to transform';
  date = new Date();
  list = [
    'Bread',
    'Milk',
    'Eggs',
    'Cheese',
    'Butter',
    'Whole grain bread',
    'Almond Milk',
    'Feta Cheese',
    'Toast Bread'
  ];
}
