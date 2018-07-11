import { Component, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventEmitter } from "selenium-webdriver";

@Component({
    selector: 'email-component',
    template: `
    <div class="form-group row">
        <label for="inputEmail1" class="col-sm-3 col-form-label">Email</label>
        <div class="col-sm-9">
            <input [formControl]="formControlEmail" name="email" type="email" class="form-control" id="inputEmail1" placeholder="{{placeholder}}">
        </div>
    </div>`,
  })
export class EmailComponent {

    @Input() placeholder: any;
    @Input() formControlEmail: FormControl;

}