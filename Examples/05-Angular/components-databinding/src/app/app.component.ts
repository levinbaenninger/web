import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './data-binding/data-binding.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'components-databinding';
}
