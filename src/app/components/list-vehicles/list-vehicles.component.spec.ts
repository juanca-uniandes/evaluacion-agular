import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ListVehiclesComponent } from './list-vehicles.component';

describe('ListVehiclesComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListVehiclesComponent]
    });
    fixture = TestBed.createComponent(ListVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
