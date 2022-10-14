import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loginService: LoginService){}

  title = 'admin-panel';

  ngOnInit(): void {
    if(localStorage.getItem('usuario')){
      this.loginService.isLogged = true;
      this.loginService.usuario = localStorage.getItem('usuario') || '';
    }
  }
}
