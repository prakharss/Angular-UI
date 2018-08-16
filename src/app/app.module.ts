import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';
import { HttpModule } from '@angular/http';
import 'nvd3';

import { ControllerService } from '././controller.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { DiscretebarComponent } from './discretebar/discretebar.component';
import { MultibarComponent } from './multibar/multibar.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    RegistrationComponent,
    TableComponent,
    DiscretebarComponent,
    MultibarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NvD3Module,
    HttpModule,
    RouterModule.forRoot([
      {
        path : '',
        component : LoginFormComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent,
        children : [
          {
            path : '',
            component : TableComponent
          },
          {
            path : 'multibar',
            component : MultibarComponent
          },
          {
            path : 'discretebar',
            component : DiscretebarComponent
          } 
        ]
      } 
    ])
  ],
  providers: [ControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
