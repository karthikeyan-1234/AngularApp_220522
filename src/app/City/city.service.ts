import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl = environment.OcelotUrl + 'GetAllCities';

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>{
    return this.http.get<City[]>(this.cityUrl).pipe(catchError(this.handleError))
  }

  private handleError(err : any) {  
    let errorMessage: string;  
    if (err.error instanceof ErrorEvent) {  
      errorMessage = `An error occurred: ${err.error.message}`;  
    } else {  
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;  
    }  
    console.error(err);  
    return throwError(errorMessage);  
  }
}
