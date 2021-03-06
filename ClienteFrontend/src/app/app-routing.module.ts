import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './interfaz/home/home.component';
import { ActivadadesComponent } from './interfaz/activadades/activadades.component';
import { HabitacionesComponent } from './interfaz/habitaciones/habitaciones.component';
import { PagoHabitacionComponent } from './interfaz/pago-habitacion/pago-habitacion.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'actividades', component: ActivadadesComponent },
  {path: 'habitaciones', component: HabitacionesComponent },
  {path: 'pagoHabitacion', component: PagoHabitacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
