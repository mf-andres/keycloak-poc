import { AuthenticationService } from 'src/app/core/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userIsLoggedIn = this.authenticationService.userIsLoggedIn();

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }
}
