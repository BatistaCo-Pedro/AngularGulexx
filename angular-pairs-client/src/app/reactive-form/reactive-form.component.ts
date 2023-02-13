import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    /*
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
    });
    */

   this.form = this.formBuilder.group({
     firstName: [''],
     lastName: [''],
     email: ['', [Validators.required, Validators.email]],
   });
    /*
    */


  }

  

  public onSubmit() {
    console.warn(this.form.value);
  }
}
