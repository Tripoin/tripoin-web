import { Component } from "@angular/core";
import { LatihanModel } from "../component/latihan.model";
import { FormGroup, FormControl } from "@angular/forms";
import { FormService } from "./service/form.service";
import { Router } from "@angular/router";

@Component({
    selector: 'form-handling',
    styleUrls: ['form-handling.component.css'],
    templateUrl: 'form-handling.component.html',
  })
export class FormHandlingComponent {

  email: String;
  placeholder: String = "Input Email Placeholder"
  formControlEmail: FormControl = new FormControl('tes');
  password = new FormControl();

  constructor(private formService: FormService, private router: Router){}

  form: FormGroup = new FormGroup({
    'email': this.formControlEmail,
    'password': this.password,
  })

  submit(){
    this.formService.data = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    localStorage.setItem('FormData', JSON.stringify(this.form.value));
    localStorage.getItem('FormData');
    this.router.navigateByUrl('/pages/latihan/form-result');
  }

  isCheckedCheckbox(event){
    console.log(event);
  }

}