import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  async post(url: string, data: Object) {
    return await this.http.post(url, data)
    // console.log('teste')
    // const axios = require('axios')
    // const coordinates = await axios.$post('https://helpmeback.herokuapp.com/get_near_alarms', { x: lat, y: long, radius: 10.0, ago: 10 })
    // return coordinates
  }
}
