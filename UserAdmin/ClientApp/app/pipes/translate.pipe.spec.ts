import { TestBed, inject } from '@angular/core/testing';

import { TranslateService } from '../services/translate/translate.service';

describe('TranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateService]
    });
  });

  it('should be created', inject([TranslateService], (service: TranslateService) => {
    expect(service).toBeTruthy();
  }));
});
