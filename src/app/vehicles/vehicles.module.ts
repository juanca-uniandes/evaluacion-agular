import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from '../components/list-vehicles/list-vehicles.component';
import { VehiclesApiService } from '../services/vehicles-api.service';
@NgModule({
  declarations: [
    ListVehiclesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListVehiclesComponent
  ], 
  providers: [
    VehiclesApiService
  ]

})
export class VehiclesModule { }
