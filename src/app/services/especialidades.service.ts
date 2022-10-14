import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http: HttpClient) { }

  obtenerEspecialidades(){
    return this.http.get(`${environment.BASE_URL}/especialidades`);
  }
}
