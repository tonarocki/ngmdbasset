import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { ListRegisterComponent } from './list/list-register/list-register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RegisService } from './share/regis.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    ListDetailComponent,
    ListRegisterComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'list/:id', component: ListDetailComponent },
      { path: 'register/:id', component: ListRegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: ''}
    ])
  ],
  providers: [ RegisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
