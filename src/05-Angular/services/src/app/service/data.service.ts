import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = [];
  pushedData = new EventEmitter<string>();

  constructor(private logService: LogService) {}

  addData(data: string) {
    this.data.push(data);
    this.logService.log('Data added: ' + data);
  }

  getData() {
    return this.data;
  }

  pushData(data: string) {
    this.pushedData.emit(data);
  }
}
