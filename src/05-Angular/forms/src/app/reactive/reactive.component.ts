import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent implements OnInit {
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      hobbies: new FormArray([new FormControl('', Validators.required)]) // FormArray is used to create an array of form controls
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.get('hobbies'));

    this.reactiveForm.reset();
  }

  getHobbyControls() {
    return (<FormArray>this.reactiveForm.get('hobbies')).controls;
  }

  onAddHobby() {
    (<FormArray>this.reactiveForm.get('hobbies')).push(
      new FormControl('', Validators.required)
    );
  }
}
