import { Component, OnInit } from "@angular/core";
import { FormService } from "../service/form.service";
import { FormModel } from "../model/form.model";

@Component({
    selector: 'form-result',
    templateUrl: 'form-result.component.html',
  })
export class FormResultComponent implements OnInit {

  data: FormModel;

  constructor(private formService: FormService){
    this.data = this.formService.data; 
  }
  
  ngOnInit(): void {
  }

}