import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//todos os services devem ser importados aqui, juntamente ao httpclient e httpclientmodule
import { LocationService } from './services/location.service';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  //o HttpClientModule deve ser colocado nos imports
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  //todos os services devem ser declarados aqui dentro, assim como o location service
  //lembrar de declarar o HttpClient aqui
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LocationService,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
