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
    // console.log('teste')
    // const axios = require('axios')
    // const coordinates = await axios.$post('https://helpmeback.herokuapp.com/get_near_alarms', { x: lat, y: long, radius: 10.0, ago: 10 })
    // return coordinates
  }
}
