import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

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
    MultibarComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
          },
          {
            path : 'add',
            component : AddComponent
          },
          {
            path : 'edit',
            component : EditComponent
          },
          {
            path : 'delete',
            component : DeleteComponent
          }
        ]
      } 
    ])
  ],
  providers: [ControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
