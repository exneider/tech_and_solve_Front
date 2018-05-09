import { Component, OnInit } from '@angular/core';
import { ViajeService } from './viaje.service';
import { Archivo } from '../model/archivo';
import { Viaje } from '../model/viaje';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private cargar = false;
  private datosArchivo: Archivo = new Archivo();
  private viaje = new Viaje();
  constructor(private viajeService: ViajeService, private alertService: AlertService) {

  }

  ngOnInit() {
    this.datosArchivo.id = 'viaje';
    this.datosArchivo.requerido = true;
  }

  private obtenerArchivo(archivo: Archivo) {
    this.datosArchivo.valor = archivo.valor;
  }

  private cargarArchivo() {
    this.cargar = true;
    this.alertService.clear();
    if (this.viaje._cedulaUsuario) {
      this.viaje._archivo = this.datosArchivo.valor;
      this.viajeService.calcularViajes(this.viaje).subscribe(resp => {
        this.descargarArchivo(resp);
        this.cargar = false;
        this.alertService.success('Archivo procesado corectamente');
      }, error => {
        console.log(<any>error);
        if (error.status === 500) {
          this.alertService.error('Ocurrio un error al cargar el archivo');
        }
        if (error.status === 400) {
          this.alertService.warn(error.error.message);
        }
      });
    }
  }


  private descargarArchivo(viaje: any) {
    const blob = new Blob([atob(viaje.archivo)], { type: 'application/octet-stream' });
    const blobURL = (window.URL).createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.download = 'viajes.txt';
    anchor.href = blobURL;
    anchor.click();


  }

}
