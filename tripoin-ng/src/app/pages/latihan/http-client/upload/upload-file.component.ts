import { Component, OnInit } from "@angular/core";
import { LatihanHttpBaseService } from "../service/http-base.service";

@Component({
    selector: 'upload-file',
    styleUrls: ['upload-file.component.css'],
    templateUrl: 'upload-file.component.html',
  })
export class UploadFileComponent implements OnInit {

  url: string = "http://10.10.124.89:8080/upload";

  constructor(private httpBaseService: LatihanHttpBaseService){}

  ngOnInit(): void {
  }

  upload(event){
    console.log(event.target.files.item(0));
    let body: FormData = new FormData();
    body.append('file', event.target.files.item(0));
    this.httpBaseService.HTTP_POST(this.url, body).subscribe((res: Response)=>{
      console.log(res['fileName']);
      console.log(res['fileDownloadUri']);
      console.log(res['fileType']);
      console.log(res['size']);
    });
  }

}