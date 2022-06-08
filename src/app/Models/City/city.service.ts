import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl = environment.OcelotUrl + 'GetAllCities';
  language : string =  'en-US';
  langFlag : boolean = false;

  constructor(private http:HttpClient) { }

  getCities():Observable<City[]>{
    this.langFlag = !this.langFlag;
    if(this.langFlag) { this.language = 'ta-IN'; } else { this.language = 'en-US'; } 
    const headers= new HttpHeaders().set('Accept-Language', this.language);
    return this.http.get<City[]>(this.cityUrl,{ 'headers': headers }).pipe(catchError(this.handleError))
  }

  getToken():Observable<any>{
    var user = {name:"Arjun",password:"123456"};
    return this.http.post<any>("https://localhost:5021/Ocelot/GetToken",user).pipe(catchError(this.handleError))
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
