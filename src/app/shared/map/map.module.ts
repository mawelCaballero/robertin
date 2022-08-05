import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlMapComponent } from './openlayers/ol-map.component';
import { Esri3MapComponent } from './esri-3-map/esri-3-map.component';



@NgModule({
  declarations: [
    OlMapComponent,
    Esri3MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [OlMapComponent, Esri3MapComponent]
})
export class MapModule { }
