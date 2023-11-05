import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehiclesApiService } from '../../services/vehicles-api.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehiculos: Vehicle[] = [];

  constructor(private vehiculosService: VehiclesApiService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      console.log(data)
    });
  }

}