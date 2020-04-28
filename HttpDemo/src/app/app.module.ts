import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmpService} from './emp.service';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { EmployessComponent } from './employess/employess.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
