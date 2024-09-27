import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  user = {
    username: 'John Doe',
    email: 'john.doe@web.com',
    password: 'SuperSecurePassword123!',
    gender: 'Male'
  };

  genders = ['Male', 'Female'];

  onSubmit(form: NgForm) {
    console.log(form.controls);
  }
}
