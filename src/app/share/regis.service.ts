import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Regisdetail } from './regdetail.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RegisService {
  urlregisall = 'http://cmm.snru.ac.th:8000/api/regis';
  urlagency = 'http://cmm.snru.ac.th:8000/api/agency';

  urltype = 'http://cmm.snru.ac.th:8000/api/type';
  urlbookhand = 'http://cmm.snru.ac.th:8000/api/type/1';
  urlsongall = 'http://cmm.snru.ac.th:8000/api/type/2';
  urleventall = 'http://cmm.snru.ac.th:8000/api/type/3';
  urluser = 'http://localhost:3001/user/';

  constructor(private http: HttpClient) {}

  register(
    stdid: string,
    prefix: string,
    fname: string,
    lname: string,
    email: string,
    tel: string,
    agencyid: string,
    regisid: string
  ): Observable<Regisdetail> {
    const header = { 'Content-Type': 'application/json'};

    const body = {
      stdid: stdid,
      prefix: prefix,
      fname: fname,
      lname: lname,
      email: email,
      tel: tel,
      agencyId: agencyid
    };

    return this.http
      .post<Regisdetail>(this.urlregisall + '/' + regisid + '/detail', body, {
        headers: header
      })
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  registersong(
    stdid: string,
    prefix: string,
    fname: string,
    lname: string,
    email: string,
    tel: string,
    agencyid: string,
    regisid: string,
    songfast: string,
    artistfast: string,
    songslow: string,
    artisslow: string,
  ): Observable<Regisdetail> {
    const header = { 'Content-Type': 'application/json'};

    const body = {
      stdid: stdid,
      prefix: prefix,
      fname: fname,
      lname: lname,
      email: email,
      tel: tel,
      agencyId: agencyid,
      songfast: songfast,
      artistfast: artistfast,
      songslow: songslow,
      artisslow: artisslow,
    };

    return this.http
      .post<Regisdetail>(this.urlregisall + '/' + regisid + '/detail', body, {
        headers: header
      })
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getregisall(): Observable<any> {
    return this.http
      .get<any>(this.urlregisall)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getallByType(id: any): Observable<any> {
    return this.http
      .get<any>(this.urltype + '/' + id)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getregisbyid(id: any): Observable<any> {
    return this.http
      .get<any>(this.urlregisall + '/' + id)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getsongall(): Observable<any> {
    return this.http
      .get<any>(this.urlregisall)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getagency(): Observable<any> {
    return this.http
      .get<any>(this.urlagency)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }
}
