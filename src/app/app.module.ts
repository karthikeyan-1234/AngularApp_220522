import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { CityService } from './services/city.service';
import { MessagesComponent } from './messages/messages.component';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    CitiesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BnNgIdleService, CityService,{
    provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
