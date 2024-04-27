import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-cmp-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cmp-a.component.html',
})
export class CmpAComponent {
  value = '';
  items: string[] = [];

  constructor(
    private logService: LogService,
    private dataService: DataService
  ) {}

  onLog(value: string) {
    this.logService.log(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }

  onSend(value: string) {
    this.dataService.pushData(value);
  }
}
