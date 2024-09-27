import { Component } from '@angular/core';
import { CmpAComponent } from './cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-b/cmp-b.component';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  imports: [CmpAComponent, CmpBComponent]
})
export class ServiceComponent {}
