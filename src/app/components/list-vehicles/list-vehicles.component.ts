import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehiclesApiService } from '../../services/vehicles-api.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];
  vehiclesByBrand: { brand: string, count: number }[] = [];

  constructor(private vehiculosService: VehiclesApiService) { }

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehicles = data;
      this.calculateVehiclesByBrand();
    });

  }

  calculateVehiclesByBrand(): void {
    const brandCounts: { [key: string]: number } = {};

    this.vehicles.forEach((vehicle: Vehicle) => {
      if (!brandCounts[vehicle.marca]) {
        brandCounts[vehicle.marca] = 1;
      } else {
        brandCounts[vehicle.marca]++;
      }
    });

    this.vehiclesByBrand = Object.keys(brandCounts).map(brand => ({
      brand: brand,
      count: brandCounts[brand]
    }));
  }

}