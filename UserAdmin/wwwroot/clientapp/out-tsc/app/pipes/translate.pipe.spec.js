import { TestBed, inject } from '@angular/core/testing';
import { TranslateService } from '../services/translate/translate.service';
describe('TranslateService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [TranslateService]
        });
    });
    it('should be created', inject([TranslateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=translate.pipe.spec.js.map