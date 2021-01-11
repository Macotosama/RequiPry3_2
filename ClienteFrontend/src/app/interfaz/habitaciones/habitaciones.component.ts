import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  sesion = 'n' 


  constructor(private breakpointObserver: BreakpointObserver, private _router: Router) { }

  ngOnInit(): void {
    this.sesion = localStorage.getItem('sesion');
  }

  cerrarSesion() {
    localStorage.setItem('sesion', 'n');
    this._router.navigate(['/home']);
  }

}
