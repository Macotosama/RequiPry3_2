import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss']
})
export class HabitacionComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  

}
