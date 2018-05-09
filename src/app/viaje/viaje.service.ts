import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { UrlServices } from '../../assets/constants/urlservices.component';
import { Viaje } from '../model/viaje';

@Injectable()
export class ViajeService {

  constructor(private http: HttpClient) {

   }

  public calcularViajes(viaje: Viaje): Observable<any> {
    const url = `${environment.API_ENDPOINT + UrlServices.URL_VIAJES}`;
    return this.http.post(url, viaje);
  }

}
