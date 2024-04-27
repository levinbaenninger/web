import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styles: ``,
})
export class PropertyBindingComponent {
  @Input() name!: string;
}
