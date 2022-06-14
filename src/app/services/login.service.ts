import { HttpBackend,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http: HttpClient;
  private loginUrl = environment.OcelotUrl + 'CheckLogin';

  constructor(private handler: HttpBackend,private bnIdle:BnNgIdleService,private router:Router) {this.http = new HttpClient(handler) }

  checkLogin(username:string,password:string):Observable<any>{
    return this.http.post(this.loginUrl,{name: username,password: password})
  }

  logOut(){
    this.bnIdle.startWatching(10).subscribe(res => {
      console.log("10 seconds inactivity. Timed out..!!")
      localStorage.clear();
      this.router.navigate(['login']);
    })
  }
}
