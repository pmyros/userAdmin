import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDevengadaListComponent } from './tarifa-devengada-list.component';

describe('TarifaDevengadaListComponent', () => {
  let component: TarifaDevengadaListComponent;
  let fixture: ComponentFixture<TarifaDevengadaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDevengadaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDevengadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
