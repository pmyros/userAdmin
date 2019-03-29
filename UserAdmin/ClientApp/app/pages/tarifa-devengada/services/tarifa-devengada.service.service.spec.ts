import { TestBed } from '@angular/core/testing';

import { TarifaDevengadaService } from './tarifa-devengada.service.service';

describe('TarifaDevengada.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarifaDevengadaService = TestBed.get(TarifaDevengadaService);
    expect(service).toBeTruthy();
  });
});
