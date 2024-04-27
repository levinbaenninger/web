import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  @ViewChild('input', { static: true }) input!: ElementRef;
  @ContentChild('paragraph', { static: true }) paragraph!: ElementRef;

  constructor() {
    setTimeout(() => {
      this.input.nativeElement.value = 'Value was overwritten!';
      this.paragraph.nativeElement.textContent = 'Content was overwritten!';
    }, 3000);
  }
}
