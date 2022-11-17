import { Injectable } from '@angular/core';

export class DataStore{
  constructor (public id:number, public name: string, public price: number, public cant: number){
      this.id = id;
      this.name = name;
      this.price = price;
      this.cant = cant;
    }
}
export class DataClientes{
  constructor(public ci:number,public name: string,
    public direction: string, public cellphone:number){
      this.ci=ci;
      this.name=name;
      this.direction=direction;
      this.cellphone= cellphone;

  }
}
export class DataVentas{
  constructor (public codigom:number,public namem:string,public cantidad: number,
    public preciov:number){
      this.codigom = codigom;
      this.namem=namem;
      this.cantidad = cantidad;
      this.preciov = preciov;


    }
}
@Injectable({
  providedIn: 'root'
})

export class AlmacenService {
  dataStore: DataStore[]=[];
  dataClientes: DataClientes[]=[];
  dataVentas: DataVentas[]=[];
  constructor() { }
  setDataStore(data: DataStore[]){
    this.dataStore = data;
  }
  getDataStore(){
    return this.dataStore;
  }
  setDataClientes(data: DataClientes[]){
    this.dataClientes = data;
  }
  getDataClientes(){
    return this.dataClientes;
  }
  setDataVentas(data: DataVentas[]){
    this.dataVentas= data;
  }
  getDataVentas(){
    return this.dataVentas;
  }
}

