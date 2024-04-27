import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BadgeSize, BadgeType, UiCoreModule } from '@buhler/ui-core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, UiCoreModule],
})
export class AppComponent {
  caption = 'click me';
  badgeType: BadgeType = BadgeType.Success;
  badgeSize: BadgeSize = BadgeSize.Dot;

  buttonClick() {
    this.caption = 'thanks';
  }
}
