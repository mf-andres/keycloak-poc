import { AuthenticationService } from 'src/app/core/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css'],
})
export class LaunchPageComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    this.authenticationService.login();
  }
}
