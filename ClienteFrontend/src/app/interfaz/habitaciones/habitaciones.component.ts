import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from "@angular/router";


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  sesion = 'n' 
  public date = new Date();
  public date2 = new Date();
  public adultos: number;
  public ninos: number;

  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) { }

  ngOnInit(): void {
    this.adultos = 2;
    this.ninos = 0;
    this.sesion = localStorage.getItem('sesion');
  }

  cerrarSesion() {
    localStorage.setItem('sesion', 'n');
    this._router.navigate(['/home']);
  }

}
