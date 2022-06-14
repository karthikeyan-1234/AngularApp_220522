import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr'; 
import { BnNgIdleService } from 'bn-ng-idle';
import { environment } from 'src/environments/environment';
import { City } from './Models/city/city';
import { CityService } from './services/city.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService:LoginService){
    this.loginService.logOut();
  }
}
