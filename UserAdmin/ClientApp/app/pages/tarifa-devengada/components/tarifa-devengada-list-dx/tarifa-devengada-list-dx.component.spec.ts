import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifaDevengadaListDxComponent } from './tarifa-devengada-list-dx.component';

describe('TarifaDevengadaListDxComponent', () => {
  let component: TarifaDevengadaListDxComponent;
  let fixture: ComponentFixture<TarifaDevengadaListDxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifaDevengadaListDxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifaDevengadaListDxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
