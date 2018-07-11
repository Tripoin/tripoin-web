import { Component, OnInit } from "@angular/core";
import { LatihanHttpBaseService } from "./service/http-base.service";

@Component({
    selector: 'http-client',
    template: '',
  })
export class HttpClientComponent implements OnInit {

  url: string = "http://localhost:4200/assets/latihan/data.json";

  constructor(private httpBaseService: LatihanHttpBaseService){}

  ngOnInit(): void {
    this.httpBaseService.HTTP_GET(this.url).subscribe((res: Response)=>{
      console.log(res['data'][0].email);
    });
  }

}