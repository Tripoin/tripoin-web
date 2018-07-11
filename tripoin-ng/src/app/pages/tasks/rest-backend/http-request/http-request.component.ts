import { Component, OnInit } from '@angular/core';
import { HttpBaseService } from '../services/http-base.service';

@Component({
  selector: 'http-request',
  styles: ['.space-style {padding-right: 10px;}'],
  templateUrl: './http-request.component.html',
})
export class TaskHttpRequestComponent implements OnInit {
  
  name: string;
  age: number;
  gender: any;
  url:string = "http://localhost:4200/assets/sample/data.json";

  constructor(private httpService: HttpBaseService){}

  ngOnInit(): void {
    this.httpService.HTTP_GET(this.url).subscribe((res: Response) => {
      this.name = res['name'];
      this.age = res['age'];
      this.gender = res['gender'];
    })
  }

}
