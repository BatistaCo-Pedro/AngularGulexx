import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
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
