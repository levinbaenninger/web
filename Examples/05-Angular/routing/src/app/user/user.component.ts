import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styles: ``,
})
export class UserComponent implements OnInit, OnDestroy {
  id!: string;
  private subscription!: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNavigate() {
    this.router.navigate(['/'], {
      queryParams: { token: 100 },
      fragment: 'anchor',
    });
  }
}
