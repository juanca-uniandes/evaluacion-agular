import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListVehiclesComponent } from './list-vehicles.component';
import { Vehicle } from '../../models/Vehicle';

describe('ListVehiclesComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;

  const mockVehicles: Vehicle[] = [
    {
      id: 1,
      marca: 'Toyota',
      linea: 'Corolla',
      referencia: 'Sedan',
      modelo: 2022,
      kilometraje: 15000,
      color: 'Azul',
      imagen: 'https://example.com/toyota.jpg'
    },
    {
      id: 2,
      marca: 'Ford',
      linea: 'Mustang',
      referencia: 'GT',
      modelo: 2023,
      kilometraje: 10000,
      color: 'Rojo',
      imagen: 'https://example.com/ford.jpg'
    },
    {
      id: 3,
      marca: 'Chevrolet',
      linea: 'Camaro',
      referencia: 'SS',
      modelo: 2021,
      kilometraje: 20000,
      color: 'Negro',
      imagen: 'https://example.com/chevrolet.jpg'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListVehiclesComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiclesComponent);
    component = fixture.componentInstance;

    // Asigna los datos ficticios al componente
    component.vehicles = mockVehicles;
    fixture.detectChanges();
  });

  it('should create a table with three rows and header', () => {
    const table = fixture.nativeElement.querySelector('.table');
    expect(table).toBeTruthy();

    const rows = fixture.nativeElement.querySelectorAll('.table tbody tr');
    expect(rows.length).toBe(3);
  });
});
