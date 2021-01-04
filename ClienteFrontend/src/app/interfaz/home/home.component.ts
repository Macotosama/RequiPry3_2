import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  provincias = ['San José', 'Cartago','Alajuela', 'Heredia', 'Puntarenas', 'Guanacaste', 'Limón'];
  provincia: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // this.preCanvas();
  }

  preCanvas():void {
    let canvas = document.getElementById('imagenHome') as
    HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = './assets/fondoHome.jpg';
      // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.onload = function(){
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }

}
