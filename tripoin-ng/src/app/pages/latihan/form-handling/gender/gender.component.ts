import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'gender-component',
    templateUrl: 'gender.component.html',
  })
export class GenderComponent {

    @Input() formControlGender: FormControl;
    @Output() data = new EventEmitter();
    isChecked: boolean = false;

    onChange(){
        this.data.emit(this.isChecked);
    }

}