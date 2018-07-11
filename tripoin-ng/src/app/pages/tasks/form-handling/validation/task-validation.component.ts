import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseModalComponent } from './modal/base-modal.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'task-validation',
  styleUrls: ['./task-validation.component.scss'],
  templateUrl: './task-validation.component.html',
})
export class TaskValidationComponent {

  name: FormControl = new FormControl();
  gender: FormControl = new FormControl("Male");
  form: FormGroup = new FormGroup({
    name: this.name,
    age: new FormControl(),
    gender: this.gender
  });

  constructor(private modalService: NgbModal) { }

  submit() {
    const activeModal = this.modalService.open(BaseModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Info';
    if(this.form.get('age').value > 16 && this.form.get('age').value < 31)
      activeModal.componentInstance.modalContent = 'Success';
    else
      activeModal.componentInstance.modalContent = 'Age Invalid';
  }

}
