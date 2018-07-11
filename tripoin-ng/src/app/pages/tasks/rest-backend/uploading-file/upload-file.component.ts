import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'upload-file',
  styleUrls: ['./upload-file.component.scss'],
  templateUrl: './upload-file.component.html',
})
export class TaskUploadFileComponent implements OnInit {  

  form: FormGroup = new FormGroup({
    fileAttachment: new FormControl()
  });

  constructor(private httpService: HttpBaseService){}

  ngOnInit(): void {
    
  }

  submit(){
  }

}
