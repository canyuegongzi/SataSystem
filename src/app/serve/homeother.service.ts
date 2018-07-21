import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeotherService {

  constructor(private http: Http, private router: Router) { }
  getCompanyDetail(): Observable<any> {
    return this.http.get('api/company').pipe(
      map(res => res.json())
    );
  }
}
