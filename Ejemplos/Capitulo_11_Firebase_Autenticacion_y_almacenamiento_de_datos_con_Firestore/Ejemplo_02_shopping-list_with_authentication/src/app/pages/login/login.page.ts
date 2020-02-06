import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async login() {
    await this.authService.login("alan@gmail.com", "123456");
    this.authService.getCurrentUser().subscribe(
      data => this.user = data
    );
  }
}
