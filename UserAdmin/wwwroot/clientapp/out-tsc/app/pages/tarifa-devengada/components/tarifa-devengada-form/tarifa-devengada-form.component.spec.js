import { async, TestBed } from '@angular/core/testing';
import { TarifaDevengadaFormComponent } from './tarifa-devengada-form.component';
describe('TarifaDevengadaFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TarifaDevengadaFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TarifaDevengadaFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tarifa-devengada-form.component.spec.js.map