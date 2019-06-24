import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Injectable()
export class LocationService {
  private url = 'https://helpmeback.herokuapp.com'
  constructor(private http: HttpClient) { }

  getNearAlarms(data) {
    return this.http.post(this.url + '/get_near_alarms', data)
  }
}
