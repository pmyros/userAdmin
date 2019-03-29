import { async, TestBed } from '@angular/core/testing';
import { TarifaDevengadaPageComponent } from './tarifa-devengada-page.component';
describe('TarifaDevengadaPageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TarifaDevengadaPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TarifaDevengadaPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tarifa-devengada-page.component.spec.js.map