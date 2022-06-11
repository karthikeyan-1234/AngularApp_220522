import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path : "", component : CitiesComponent},
  {path : "messages",component : MessagesComponent},
  {path : "cities", component : CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
