import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDevengadaFormComponent } from './tarifa-devengada-form.component';

describe('TarifaDevengadaFormComponent', () => {
  let component: TarifaDevengadaFormComponent;
  let fixture: ComponentFixture<TarifaDevengadaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDevengadaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDevengadaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
