import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import leaflet from 'leaflet';
import * as $ from 'jquery'
//importa o service q deseja-se utilizar
import { LocationService } from '../services/location.service'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  //dentro do constructor, declarar o service como variavel global 'private'
  constructor(
    private locationService: LocationService
  ) { }

  private userMarker;

  //ao carregar nossa pagina, execute o loadMap
  ionViewDidEnter() {
    this.loadmap();
    let a = {
      "x": 0,
      "y": 0,
      "radius": 0,
      "ago": 0
    };
    // let x = {
    //   "x": -8.0440839, 
    //   "y": -34.9175702
    // }
    // let x1 = {
    //   "x": -8.0433007, 
    //   "y": -34.9095542
    // }
    // let x2 = {
    //   "x": -8.0433149, 
    //   "y": -34.911743
    // }
    // this.locationService.createAlarms(x).subscribe(res=>{
    //   console.log(res)
    // })
    // this.locationService.createAlarms(x1).subscribe(res=>{
    //   console.log(res)
    // })
    // this.locationService.createAlarms(x2).subscribe(res=>{
    //   console.log(res)
    // })


    // console.log(this.locationService)
    //usa assim, lembrar q caso o retorno seja um Observable (como neste caso é), usar .subscriber para ler o retorno devidamente
    // this.locationService.getNearAlarms(a)
    //   .subscribe(res => {
    //     console.log(res)
    //   })
  }


  loadmap() {
    //onde definimos os nossos marcadores, para inserir uma cor nova, basta mudar o final da URL do atributo iconUrl
    var greenIcon = new leaflet.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var redIcon = new leaflet.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var blueIcon = new leaflet.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    //definimos o nosso mapa em si, carregamos o map do leaflet
    this.map = leaflet.map("map").fitWorld();
    //definindo coords, algo q n sei e o zoom e no final, o carregamos no nosso mapa
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 80
    }).addTo(this.map);
    // this.map.setZoom(18);

    //apenas um exemplo que podemos trabalhar com mais de um marcador, no caso, este é um marcador hardcoded mesmo

    //exemplo comentado de como adicionar marker
    // let markerGroup = leaflet.featureGroup();
    // let marker2: any = leaflet.marker([-8.0439712, -34.9106228, 15], { icon: blueIcon }).on('click', () => {
    //   alert('Marker clicked');
    //   $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + -8.0439712 + '&lon=' + -34.9128115 + '', (data) => {
    //     alert("Endereço próximo: " + data.address.road);
    //   });
    // })
    //aqui, adicionamos nossos 2 marcadores a um markerGroup
    // markerGroup.addLayer(marker2);
    // this.map.addLayer(markerGroup);
    //por fim, colocamos o grupo de marcadores no nosso mapa


    //tbh, acho q ele ta procurando a posiçao do usuario pra colocar um marcador nela
    this.map.locate({
      setView: true
    }).on('locationfound', (e) => {
      // console.log(e)
      let aux = {
        "x": 0,
        "y": 0,
        "radius": 0,
        "ago": 0
      };
      aux.x = e.latitude;
      aux.y = e.longitude;
      aux.radius = 0.1;
      aux.ago = 20;
      this.locationService.getNearAlarms(aux)
        .subscribe((res: any) => {
          let markerGroupFor = leaflet.featureGroup();
          res.alarms.forEach(element => {
            let x = element.x;
            let y = element.y;
            let marker = leaflet.marker([x, y], { icon: redIcon }).on('click', () => {
              //salvamos lat e lon pra usar posteriormete
              let lat = x;
              let lon = y;
      
              //requisiçao para obter endereço aproximado de nosso marcador
              $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon, (data) => {
                alert("Endereço próximo: " + data.address.road);
              });
            })
            markerGroupFor.addLayer(marker);
          });
          
          this.map.addLayer(markerGroupFor);
        })

      let markerGroupAux = leaflet.featureGroup();
      // const data = {
      //   x: e.latitude,
      //   y: e.longitude,
      //   radius: 10.0,
      //   ago: 3600
      // }
      // console.log('teste');
      // this.locationService.post('https://helpmeback.herokuapp.com/get_near_alarms', data).then((res) => {
      //   console.log(res);
      // });
      if(this.userMarker) this.map.removeLayer(this.userMarker)
      this.userMarker = leaflet.marker([e.latitude, e.longitude], { icon: blueIcon }).on('click', () => {
        //salvamos lat e lon pra usar posteriormete
        let lat = e.latitude;
        let lon = e.longitude;

        //requisiçao para obter endereço aproximado de nosso marcador
        $.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lon, (data) => {
          alert("Endereço próximo: " + data.address.road);
        });
      })
      markerGroupAux.addLayer(this.userMarker);
      this.map.addLayer(markerGroupAux);
    }).on('locationerror', (err) => {
      alert(err.message);
    })
    setInterval(() => {
      this.map.locate({
      })
    }
      // this.map.locate({
      //   setView: true
      // }).on('locationfound', (e) => {
      //   // console.log(e)
      //   let aux = {
      //     "x": 0,
      //     "y": 0,
      //     "radius": 0,
      //     "ago": 0
      //   };
      //   aux.x = e.latitude;
      //   aux.y = e.longitude;
      //   aux.radius = 0.01;
      //   aux.ago = 60;
      //   console.log(aux)
      //   this.locationService.getNearAlarms(aux)
      //     .subscribe((res: any) => {
      //       console.log(res)
      //       if (res.alarms.lenght > 0) {
      //         console.log("OPA MEU QUERIDO")
      //       }
      //       else {
      //         console.log("ta tudo certo, bb")
      //       }
      //     })


      // })}
      , 15000);
  }
}
