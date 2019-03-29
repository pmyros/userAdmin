import { async, TestBed } from '@angular/core/testing';
import { TarifaDevengadaListDxComponent } from './tarifa-devengada-list-dx.component';
describe('TarifaDevengadaListDxComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TarifaDevengadaListDxComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TarifaDevengadaListDxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tarifa-devengada-list-dx.component.spec.js.map