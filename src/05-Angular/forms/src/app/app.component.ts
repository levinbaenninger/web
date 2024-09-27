import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilderComponent } from './reactive/form-builder/form-builder.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    TemplateDrivenComponent,
    ReactiveComponent,
    FormBuilderComponent
  ]
})
export class AppComponent {
  title = 'forms';
}
