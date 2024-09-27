import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit {
  formBuilderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formBuilderForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }),
      password: ['', [Validators.required, Validators.minLength(8)]],
      hobbies: this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  get hobbies() {
    return this.formBuilderForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log(this.formBuilderForm);
  }
}
