import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr'; 
import { environment } from 'src/environments/environment';
import { City } from './Models/city/city';
import { CityService } from './services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
