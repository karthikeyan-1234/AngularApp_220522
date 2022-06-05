import { Component } from '@angular/core';
import { Employee } from './Employee/employee';
import { EmployeeService } from './Employee/employee.service';
import * as signalR from '@microsoft/signalr'; 
import { environment } from './Environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalR';
  employees : Employee[] = [];

  constructor(private service:EmployeeService){}

  ngOnInit(){

    this.getEmployeeData();

    const connection = new signalR.HubConnectionBuilder()  
      .configureLogging(signalR.LogLevel.Information)  
      .withUrl(environment.baseUrl + 'notify')  
      .build();

    console.log(environment.baseUrl + 'notify');
  
    connection.start().then(function () {  
      console.log('SignalR Connected!');  
    }).catch(function (err) {  
      return console.error(err.toString());  
    });  

    connection.on("BroadcastMessage", () => {  
      this.getEmployeeData();  
    });



  }

  getEmployeeData(){
    this.service.getEmployees().subscribe((res : any) => this.employees = res)
  }
}
