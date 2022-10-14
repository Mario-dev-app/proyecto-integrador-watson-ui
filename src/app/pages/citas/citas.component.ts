import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CitasService } from 'src/app/services/citas.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: any[] = [];

  limit: number = 5;

  offset: number = 0;

  turnos: any[] = [];

  especialidades: any[] = [];

  constructor(
    private citasService: CitasService, 
    private spinner: NgxSpinnerService,
    private turnosService: TurnosService,
    private especialidadesService: EspecialidadesService
    ) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  mostrarAlertaSimple(mensaje: string) {
    Swal.fire({
      text: mensaje,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  obtenerCitas() {
    this.spinner.show();
    this.citasService.obtenerCitas(this.limit, this.offset).subscribe((data: any) => {
      if (data.data.length == 0) {
        this.mostrarAlertaSimple('Ya no hay más registros para mostrar');
        this.spinner.hide();
        this.offset -= 5;
        return;
      } else {
        this.citas = data.data
        this.spinner.hide();
      }
    });
  }

  paginaSiguiente() {
    this.offset += 5;
    this.obtenerCitas();
  }

  paginaAnterior() {
    if (this.offset == 0) {
      this.mostrarAlertaSimple('Ya no puede retroceder más');
      return;
    }
    this.offset -= 5;
    this.obtenerCitas();
  }

  cambiarEstadoAtendida(cita: any) {

    Swal.fire({
      title: '¿Seguro que desea modificar el estado de la cita?',
      showDenyButton: true,
      confirmButtonText: 'Modificar',
      denyButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.citasService.modificarEstadoCita(cita.id, cita.atendida).subscribe((resp: any) => {
          if(resp.ok){
            this.mostrarAlertaSimple(resp.message);
            this.obtenerCitas();
          }
        })
      }else{
        this.obtenerCitas();
      }
    });

  }

  obtenerTurnos(){
    this.turnosService.obtenerTurnos().subscribe((resp: any) => {
      this.turnos = resp.data;
    });
  }

  obtenerEspecialidades(){
    this.especialidadesService.obtenerEspecialidades().subscribe((resp: any) => {
      this.especialidades = resp.data;
    })
  }

}
