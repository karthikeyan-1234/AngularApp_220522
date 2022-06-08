import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr'; 
import { environment } from 'src/environments/environment';
import { City } from './Models/City/city';
import { CityService } from './Models/City/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalR';
  cities : City[] = [];
  count = 0;

  constructor(private service:CityService){}

  ngOnInit(){
    localStorage.setItem("lang","en-US");
    this.getCitiesData();

    const connection = new signalR.HubConnectionBuilder()  
      .configureLogging(signalR.LogLevel.Information)  
      .withUrl(environment.SignalRUrl + 'notify',{skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets})  
      .build();
  
    connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  

    connection.on("BroadcastMessage", () => {  
      this.getCitiesData();  
    });

  }

  getCitiesData(){
    this.service.getCities().subscribe((res : any) => {this.cities = res;this.count = this.cities.length; console.log("Data changed..!!");});
  }

  SetLanguage(){
    console.log("Changing the Language....");
    this.getCitiesData();
  }
}
