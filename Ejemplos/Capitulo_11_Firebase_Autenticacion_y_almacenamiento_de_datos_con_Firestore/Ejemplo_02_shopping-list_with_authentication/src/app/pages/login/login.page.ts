import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login("alan@gmail.com", "123456").then(
        this.user = this.authService.getCurrentUser() //.pipe(first()).toPromise()
    );
  }
}
