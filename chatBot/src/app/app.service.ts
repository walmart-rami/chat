import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { ProductResponse } from './productResponse.model';

@Injectable()
export class AppService {
    private _walmartUrl = `https://walmartlabs-test.appspot.com/_ah/api/walmart/v1/walmartproducts/${environment.apiKey}/`;
    constructor(private http: HttpClient) {
     }

     getProducts(pageNumber: number): Observable<ProductResponse> {
      const urlTouse =  this._walmartUrl + pageNumber.toString() + '/' + '30';
       return this.http.get<ProductResponse>(urlTouse);
     }

}