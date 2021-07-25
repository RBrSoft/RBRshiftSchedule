import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {MemberComponent} from './member/member.component';
import {AppRoutingModule} from './app-routing.module';

import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    // Um das Backend zu emulieren
    InMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '270938385499-f5jbqppbcn2r7m2sfmpsqaogr8a3sn9m.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              'clientId'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
