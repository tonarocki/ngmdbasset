import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Regisdetail } from './regdetail.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisService {
  urlregisall = 'http://localhost:8000/api/regis';
  urluser = 'http://localhost:3001/user/';

  constructor(private http: HttpClient) { }

  register(stdid: string, prefix: string, fname: string, lname: string, email: string, tel: string
  , agencyid: string, regisid: string): Observable<Regisdetail> {

    const header = { 'Content-Type': 'application/json' };

    const body = {
      'stdid': stdid,
      'prefix': prefix,
      'fname': fname,
      'lname': lname,
      'email': email,
      'tel': tel,
      'agencyId': agencyid,

    };

    return this.http.post<Regisdetail>(this.urlregisall + '/' + regisid + '/detail', body, {headers: header})
    .catch(
        (errorResponse: HttpErrorResponse) => {
            return Observable.throw(errorResponse);
        }
    );
  }

  getregisall(): Observable<any> {

    return this.http.get<any>(this.urlregisall)
    .catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
  }

  getregisbyid(id: any): Observable<any> {
    return this.http.get<any>(this.urlregisall + '/' + id)
    .catch(
      (errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      }
    );
  }

}
