import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HomeComponent],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formbuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formbuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.reservationService.getReservation(id)?.subscribe((reservation) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        reservation.id = id;
        this.reservationService.updateReservation(id, reservation).subscribe((() => {
          console.log("Update request processed.")
        }));
      } else {
        this.reservationService.createReservation(reservation).subscribe(() => {
          console.log("Create request processed.")
        });
      }

      this.router.navigate(['/list']);
    }
  }
}
