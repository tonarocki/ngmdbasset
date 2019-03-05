import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SongComponent } from './song/song.component';
import { SongDetailComponent } from './song/song-detail/song-detail.component';
import { SongRegisterComponent } from './song/song-register/song-register.component';
import { RegeventComponent } from './regevent/regevent.component';
import { RandomComponent } from './random/random.component';
import { PiceventComponent } from './picevent/picevent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    ListDetailComponent,
    ListRegisterComponent,
    HeaderComponent,
    FooterComponent,
    SongComponent,
    SongDetailComponent,
    SongRegisterComponent,
    RegeventComponent,
    RandomComponent,
    PiceventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'list/:id', component: ListDetailComponent },
      { path: 'register/:id', component: ListRegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'song', component: SongComponent },
      { path: 'song/:id', component: SongDetailComponent },
      { path: 'songregister/:id', component: SongRegisterComponent },
      { path: 'event', component: RegeventComponent },
      { path: 'random', component: RandomComponent },
      { path: 'pic', component: PiceventComponent },
      { path: '**', redirectTo: ''}
    ])
  ],
  providers: [ RegisService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
