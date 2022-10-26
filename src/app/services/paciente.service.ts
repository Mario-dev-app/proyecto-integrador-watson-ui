import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  pacientePorDni(dni: string){
    return this.http.post(`${environment.BASE_URL}/paciente-por-dni`, {dni});
  }
}
