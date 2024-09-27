import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ServiceComponent]
})
export class AppComponent {
  title = 'services';
}
