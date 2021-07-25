import {Component} from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService) {
  }

  socialSignIn(provider: string): void {
    let socialPlatform;
    if (provider === 'google') {
      socialPlatform = GoogleLoginProvider.PROVIDER_ID;
    } else if (provider === 'facebook') {
      socialPlatform = FacebookLoginProvider.PROVIDER_ID;
    } else {
      socialPlatform = null;
    }

    this.authService.signIn(socialPlatform).then(
      (userData) => {
        console.log(userData);
        this.user = userData;
        this.loggedIn = (userData != null);
      }
    );
  }

  socialSignOut(): void {
    this.authService.signOut().then(
      () => {
        this.user = null;
        this.loggedIn = false;
      }
    );
  }
}
