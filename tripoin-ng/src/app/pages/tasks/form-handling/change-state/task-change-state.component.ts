import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../../../../@core/data/state.service';
import { ResultStateService } from './services/state.service';

@Component({
  selector: 'task-change-state',
  styleUrls: ['./task-change-state.component.scss'],
  templateUrl: './task-change-state.component.html',
})
export class TaskChangeStateComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    gender: new FormControl("Male")
  });

  constructor(private router: Router, private stateService: ResultStateService){}

  submit(){
    this.stateService.data = {
      name: this.form.get('name').value,
      age: this.form.get('age').value,
      gender: this.form.get('gender').value
    }
    this.router.navigateByUrl('/pages/tasks/task-change-state/result-state');
  }

}
