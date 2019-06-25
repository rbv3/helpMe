import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Injectable()
export class LocationService {
  //url do nosso back
  private url = 'https://helpmeback.herokuapp.com'
  //httpCliente precisa ser importado e colcoado no constructor
  constructor(private http: HttpClient) { }

  //Cria-se uma funçao comum q recebe o corpo da requisição
  getNearAlarms(data) {
    //chama-se o tipo do metodo, nesse caso post, com a url + o endpoint, e o corpo da requisiçao como parametros
    return this.http.post(this.url + '/get_near_alarms', data)
  }
  createAlarms(data){
    return this.http.post(this.url + '/create_alarm', data);
  }
}
