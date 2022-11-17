import { Component, OnInit } from '@angular/core';
import {DataStore,AlmacenService,DataClientes,DataVentas} from '../almacen/almacen.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pestania2',
  templateUrl: './pestania2.component.html',
  styleUrls: ['./pestania2.component.css']
})
export class Pestania2Component implements OnInit {
  ci:number=0;
  name:string='';
  direction:string='';
  cant:number=0;
  celular:number=0;
  codigo:number=0;
  factura:number=0;
  tot:number=0;
  n:number=0;
  namestore:string='';
  canti:number=0;
  preci:number=0;
  nencontre:string='';
  datosc: DataClientes[]=[];
  datosv: DataVentas[]=[];
  datos: DataStore[]=[];
  datosv2: DataVentas[]=[];
  seleccion: string="";
  dati: Array<string>=["si","no"];
    constructor(private almacen:AlmacenService) {
    this.datos=this.almacen.getDataStore();
    this.datosv=this.almacen.getDataVentas();
    this.datosc=this.almacen.getDataClientes();
  }

  ngOnInit(): void {

  }
  buscar(){
    console.log(this.datos);
    console.log(this.name);
    console.log(this.ci);
    console.log(this.celular);
    console.log(this.direction);
    for(let i in this.datos){

      if(this.datos[i]['id']==this.codigo){
        console.log(this.datos[i]['id']);
        this.namestore=this.datos[i]['name'];
        this.canti=this.datos[i]['cant'];
        this.preci = this.datos[i]['price'];
        this.n++;
      }
    }
    if(this.n == 0){
      this.nencontre = "NO ENCONTRE DATOS PARA ESE CODIGO";
      this.n=0;
    }
  }
  onSubmit(){
    console.log(this.seleccion);
    console.log(this.cant);
    console.log(this.preci);
    for (let i in this.datos){
      if(this.datos[i]['id']==this.codigo){
        this.datos[i]['cant']=this.datos[i]['cant']-this.cant;
      }
    }
    this.almacen.setDataStore(this.datos);
    if(this.seleccion=="si"){
      this.tot=(this.preci*this.cant)+7.5;

    }
    if(this.seleccion=="no"){
      this.tot=(this.preci*this.cant);
    }
    this.datosv2.push({
      codigom: this.codigo,
      namem: this.namestore,
      cantidad: this.cant,
      preciov: Math.round((this.tot)*100)/100
    });
    this.datosc.push({
      ci: this.ci,
      name: this.name,
      direction: this.direction,
      cellphone: this.celular
    });
    for (let i in this.datosv2){
      this.datosv.push({
        codigom: this.datosv2[i].codigom,
        namem: this.datosv2[i].namem,
        cantidad: this.datosv2[i].cantidad,
        preciov: this.datosv2[i].preciov
      });
    }

    this.almacen.setDataVentas(this.datosv);
    this.almacen.setDataClientes(this.datosc);

    console.log(this.almacen.getDataStore());
    console.log(this.almacen.getDataVentas());
    console.log(this.almacen.getDataClientes());
    this.factura++;
  }

  cancelar(){
    this.n=0;
  }
}
