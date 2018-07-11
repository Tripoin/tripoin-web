import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

@Injectable()
export class LatihanHttpBaseService {

    constructor(private httpService: HttpClient){}

    public HTTP_GET(url: string): Observable<any> {
        return this.httpService.get(url)
        .catch(this.errorHandle);
    }

    public HTTP_POST(url: string, body: any) : Observable<any> {
        return this.httpService.post(url, body)
        .catch(this.errorHandle);
    }

    public HTTP_PUT(url: string, body: any) : Observable<any> {
        return this.httpService.put(url, body)
        .catch(this.errorHandle);
    }

    public HTTP_DELETE(url: string): Observable<any> {
        return this.httpService.delete(url)
        .catch(this.errorHandle);
    }

    private errorHandle = (error) => {
        const errorMsg = 'Internal Server Error : '+ (error.status ? error.status : "")
        if(error.status == 200){
            return Observable.empty();
        }else {
            return Observable.throw(errorMsg);
        }
    }

}