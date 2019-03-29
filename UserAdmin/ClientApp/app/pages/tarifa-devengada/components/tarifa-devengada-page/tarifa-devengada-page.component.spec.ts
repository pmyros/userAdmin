import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDevengadaPageComponent } from './tarifa-devengada-page.component';

describe('TarifaDevengadaPageComponent', () => {
  let component: TarifaDevengadaPageComponent;
  let fixture: ComponentFixture<TarifaDevengadaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDevengadaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDevengadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
