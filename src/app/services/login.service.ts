import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged: boolean = false;

  usuario: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: any, pass: any){
    let body = {usuario, pass};
    return this.http.post(`${environment.BASE_URL}/login`, body);
  }

  logout(){
    this.isLogged = false,
    this.usuario = '';
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/login');
  }
}
