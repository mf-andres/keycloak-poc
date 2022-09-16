import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private oauthService: OAuthService, private router: Router) {}

  init() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.userIsLoggedIn()) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  userIsLoggedIn() {
    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();
    return hasIdToken && hasAccessToken;
  }

  get userName() {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return '';
    }
    return claims['name'];
  }

  logout() {
    this.oauthService.logOut();
  }
}
