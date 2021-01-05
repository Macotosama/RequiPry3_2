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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  provincias = ['San José', 'Cartago','Alajuela', 'Heredia', 'Puntarenas', 'Guanacaste', 'Limón'];
  provincia: string;
  sesion = 'n' 

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
  ];

  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) { }

  ngOnInit(): void {
    this.sesion = localStorage.getItem('sesion');
  }

  cerrarSesion() {
    localStorage.setItem('sesion', 'n');
    // this._router.navigate(['/home']);
    location.reload();
  }

  inicarSesion() {
    localStorage.setItem('sesion', 's');
    // this._router.navigate(['/home']);
    location.reload();
  }
}
