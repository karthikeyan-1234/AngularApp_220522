import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  connection : signalR.HubConnection | undefined;

  constructor() { }

  ngOnInit() {

    this.connection = new signalR.HubConnectionBuilder()  
    .configureLogging(signalR.LogLevel.Information)  
    .withUrl(environment.SignalRUrl + 'message',{skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets})
    .build();

    this.connection.start().then(function () {  
      console.log('Message SignalR Connected!');
    }).catch(function (err) {  
      return console.error(err.toString());  
    });

    this.connection.on("groupMessage",(res) => { console.log(res); console.log("Result..!!") })

  }


  join = () => this.connection?.send("Join");
  message = () => this.connection?.send("Message");

}
