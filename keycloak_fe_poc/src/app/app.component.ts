import { AuthenticationService } from './core/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'keycloak-poc';

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.init();
  }
}
