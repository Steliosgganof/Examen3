import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    dir: string = "Avenida Alexander, Calle 23 de Achumani";
    cel: number = 76250588;
  constructor() { }

  ngOnInit(): void {
  }

}
