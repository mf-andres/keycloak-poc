import { AuthenticationService } from 'src/app/core/authentication.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userName = this.authenticationService.userName;
  message = '';

  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  recoverText(): void {
    this.httpClient
      .get<string>('http://localhost:8000/helloworld')
      .subscribe((value) => {
        this.message = value;
      });
  }
}
