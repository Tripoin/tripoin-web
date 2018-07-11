import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'base-modal',
  templateUrl: 'base-modal.component.html',
})
export class BaseModalComponent {

  modalHeader: string;
  modalContent : any;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
