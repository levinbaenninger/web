import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private subscriptionFragment!: Subscription;
  token!: string | null;
  fragment!: string | null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.token = queryParams['token'];
      }
    );
    this.subscriptionFragment = this.activatedRoute.fragment.subscribe(
      (fragment) => {
        this.fragment = fragment;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionFragment.unsubscribe();
  }
}
