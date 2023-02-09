import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  locations: string[] = ['Houston', 'Dallas', 'Austin'];
  myForm: FormGroup = new FormGroup({});

  
  constructor(private fb: FormBuilder) { }

  get references(): FormArray {
    return this.myForm?.get('references') as FormArray;
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.myForm = this.fb.group({
      name: 'Name',
      phoneNumber: '',
      preferedLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')]),
    });
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

  

  selectLocation(event: any) :void {
    this.myForm.patchValue({
      preferedLocation: event.target.value
    });

  }
}
