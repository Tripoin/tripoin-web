import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpBaseService {

    constructor(private http: HttpClient) {} 

    public HTTP_GET(url: string): Observable<any>{
        return this.http.get(url)
        .catch(this.errorHandle);
    }

    public HTTP_POST(url: string, body: any): Observable<any>{
        return this.http.post(url, body)
        .catch(this.errorHandle);
    }

    public HTTP_DELETE(url: string, body: any): Observable<any>{
        return this.http.delete(url)
        .catch(this.errorHandle);
    }

    public HTTP_PUT(url: string, body: any): Observable<any>{
        return this.http.put(url, body)
        .catch(this.errorHandle);
    }
    
    private errorHandle = (error) => {        
        const errMsg = (error.status ? error.status : "") + " - Internal Server Error";
        if(error.status == 200){
            return Observable.empty();
        } else if(error.status == 401) {
            return Observable.throw(errMsg);
        }else{
            return Observable.throw(errMsg);
        }
    }

}