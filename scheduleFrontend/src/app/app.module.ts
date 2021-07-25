import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {MemberComponent} from './member/member.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';

// import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Entweder reelles Backend oder das Backend emulieren
    environment.production ? [] : InMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule,
//    SocialLoginModule
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
