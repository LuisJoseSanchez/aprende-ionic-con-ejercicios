import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  logged: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  logout() {
    this.authService.logout().then(
      () => location.reload()
    );
  }
}
