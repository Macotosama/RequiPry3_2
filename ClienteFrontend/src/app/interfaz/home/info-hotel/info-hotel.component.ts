import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialogRef } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-info-hotel',
  templateUrl: './info-hotel.component.html',
  styleUrls: ['./info-hotel.component.scss']
})
export class InfoHotelComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
  ];
  
  constructor(private _router: Router, private _diaglogRef: MatDialogRef<InfoHotelComponent>) { }

  ngOnInit(): void {
  }

  habitacion(hotel: string): void {
    localStorage.setItem('hotel', hotel);
    this._diaglogRef.close();
    this._router.navigate(['/habitaciones']);
  }

}
