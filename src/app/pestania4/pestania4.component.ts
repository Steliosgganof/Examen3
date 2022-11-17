import { Component, OnInit } from '@angular/core';
import {DataStore,AlmacenService,DataClientes,DataVentas} from '../almacen/almacen.service';
@Component({
  selector: 'app-pestania4',
  templateUrl: './pestania4.component.html',
  styleUrls: ['./pestania4.component.css']
})
export class Pestania4Component implements OnInit {

  constructor(private almacen:AlmacenService) { }
  datosc: DataClientes[]=this.almacen.getDataClientes();
  datosv: DataVentas[]=this.almacen.getDataVentas();
  ngOnInit(): void {
  }

}
