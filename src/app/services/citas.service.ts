import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  /* Obtener citas */
  obtenerCitas(limit: number, offset: number){
    return this.http.get(`${environment.BASE_URL}/citas?limit=${limit}&offset=${offset}`);
  }

  modificarEstadoCita(id: string, atendida: boolean){
    return this.http.put(`${environment.BASE_URL}/modificar-estado-cita`, {id: id, atendida: atendida});
  }
}
