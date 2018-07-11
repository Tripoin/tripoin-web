import { Component, OnInit } from '@angular/core';
import { StateModel } from '../models/state.model';
import { ResultStateService } from '../services/state.service';

@Component({
  selector: 'result-state',
  styles: ['.space-style {padding-right: 10px;}'],
  templateUrl: './result-state.component.html',
})
export class NextStateComponent implements OnInit {

  data: StateModel;

  constructor(private stateService: ResultStateService){}
  
  ngOnInit(): void {
    this.data = this.stateService.data;
  }

}
