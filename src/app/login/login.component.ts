import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required])
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  mostrarAlertaSimple(mensaje: string) {
    Swal.fire({
      text: mensaje,
      icon: 'info',
      confirmButtonColor: 'black',
      confirmButtonText: 'OK'
    });
  }

  login(){
    if(!this.loginForm.valid){
      this.mostrarAlertaSimple('Ingrese correctamente sus credenciales');
      return;
    }

    const usuario = this.loginForm.controls['usuario'].value?.trim();
    const pass = this.loginForm.controls['pass'].value?.trim();

    this.loginService.login(usuario, pass).subscribe((resp: any) => {
      if(!resp.ok){
        this.mostrarAlertaSimple('Los datos ingresados no son correctos.');
        return;
      }

      this.loginService.isLogged = true;
      this.loginService.usuario = resp.usuario;
      localStorage.setItem('usuario', resp.usuario);
      this.router.navigateByUrl('/citas');
    });
  }

}
