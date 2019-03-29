import { async, TestBed } from '@angular/core/testing';
import { TarifaDevengadaListComponent } from './tarifa-devengada-list.component';
describe('TarifaDevengadaListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TarifaDevengadaListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TarifaDevengadaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tarifa-devengada-list.component.spec.js.map