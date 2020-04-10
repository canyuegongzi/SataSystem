import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import baseUrl from '../../api';

@Injectable({
  providedIn: 'root'
})
export class HomeotherService {

  constructor(private http: Http, private router: Router) { }
  getCompanyDetail(par: CompanySearech): Observable<any> {
    return this.http.get(baseUrl + 'api/company', {params: par}).pipe(
      map(res => res.json())
    );
  }
}


export interface CompanySearech {
  page ?: any | null;
  name ?: any | null;
}
