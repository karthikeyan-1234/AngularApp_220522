import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "messages",component : MessagesComponent},
  {path : "cities", component : CitiesComponent},
  {path : "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
