import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss',
  imports: [CommonModule, RouterModule, HomeComponent],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
    });
  }

  deleteReservation(id: string) {
    this.reservationService
      .deleteReservation(id)
      .subscribe(() => console.log('Delete request got processed.'));
  }
}
