import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';
import { City } from '../Models/city/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  title = 'SignalR';
  cities : City[] = [];
  count = 0;
  connection : signalR.HubConnection | undefined;

  constructor(private service:CityService,private router:Router){}

  ngOnInit(){
    localStorage.setItem("lang","en-US");
    this.getCitiesData();

    this.connection = new signalR.HubConnectionBuilder()  
      .configureLogging(signalR.LogLevel.Information)  
      .withUrl(environment.SignalRUrl + 'notify',{skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets})
      .build();
  
    this.connection.start().then(function () {  
      console.log('SignalR Connected!');
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  

    this.connection.on("BroadcastMessage", () => {  
      this.getCitiesData();  
    });

  }

  getCitiesData(){
    this.service.getCities().subscribe((res : any) => {this.cities = res;this.count = this.cities.length; console.log("Data changed..!!");});
  }

  SetLanguage(){
    console.log(this.service.langFlag);
    console.log("Changing the Language....");
    this.getCitiesData();
    console.log(this.service.langFlag);
  }

  LogOut(){
    localStorage.clear();  }

}
