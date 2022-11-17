import { Component, OnInit } from '@angular/core';
import {DataStore,AlmacenService,DataClientes,DataVentas} from '../almacen/almacen.service';

@Component({
  selector: 'app-pestania3',
  templateUrl: './pestania3.component.html',
  styleUrls: ['./pestania3.component.css']
})
export class Pestania3Component implements OnInit {
  codigo: number=0;
  name: string='';
  cant: number = 0;
  precio: number=0;
  ncant:number=0;
  nprecio:number=0;
  dat:number=0;
  nucodigo:number=0;
  nunombre:string='';
  nucant:number=0;
  nuprecio:number=0
  n: number=0;
  datazo:DataStore[]=[];
  constructor(private almacen:AlmacenService) { }
  datost : DataStore[]=this.almacen.getDataStore();
  ngOnInit(): void {

  }
  eliminar(dat: DataStore){
    console.log(dat.id);
    for(let i=0;i<this.datost.length;i++){
      if(this.datost[i]['id']==dat.id){
        this.datost.splice(i,1);
      }
    }
    this.almacen.setDataStore(this.datost);
   // window.location.reload();
  }
  seleccion(dat: DataStore){
    this.codigo = dat.id;
    console.log(dat.id);
    this.n++;
    for(let i=0;i< this.datost.length;i++){
      if(this.datost[i].id==dat.id){
        this.name = this.datost[i].name;
      }
    }
  }
  actualizar(){

    for(let i in this.datost){
      if(this.datost[i]['id']==this.codigo){
        this.datost[i]['cant']=this.ncant;
        this.datost[i]['price']=this.nprecio;
      }
    }
    this.almacen.setDataStore(this.datost);
  //  window.location.reload();
  }
  agregar(){
    this.datost.push({
      id: this.nucodigo,
      name: this.nunombre,
      cant: this.nucant,
      price: this.nuprecio
    });
    this.almacen.setDataStore(this.datost);
    console.log(this.almacen.getDataStore());
   // window.location.reload();
  }
}
