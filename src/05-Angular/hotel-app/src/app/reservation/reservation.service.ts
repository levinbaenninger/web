import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> | undefined {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  createReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/reservation', reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/reservation/' + id);
  }

  updateReservation(
    id: string,
    updateReservation: Reservation
  ): Observable<void> {
    return this.http.put<void>(this.apiUrl + '/reservation/' + id, updateReservation);
  }
}
