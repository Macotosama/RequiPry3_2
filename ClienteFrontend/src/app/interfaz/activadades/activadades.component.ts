import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-activadades',
  templateUrl: './activadades.component.html',
  styleUrls: ['./activadades.component.scss']
})
export class ActivadadesComponent implements OnInit {
  provincias = ['San José', 'Cartago','Alajuela', 'Heredia', 'Puntarenas', 'Guanacaste', 'Limón'];
  provincia: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
