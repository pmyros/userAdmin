var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { HttpClient, HttpRequest, HttpEventType } from "@angular/common/http";
import { TranslatePipe } from "../../../pipes/translate.pipe";
var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(http, _t) {
        this.http = http;
        this._t = _t;
        this.columns = [];
        this.data = [];
        this.isLoadingResults = false;
        this.url = "https://ngnetcoreapi.azurewebsites.net/api/upload/UploadExcel";
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        this.columns = [
            {
                dataField: "Fecha",
                caption: this.translate("FECHA"),
                dataType: "date"
            },
            {
                dataField: "ComisionId",
                caption: this.translate("COMISION"),
                dataType: "string",
                visible: false
            },
            {
                dataField: "MiembroCompensadorCodigo",
                caption: this.translate("COD_ALYC"),
                dataType: "string"
            },
            {
                dataField: "MiembroCompensadorDescripcion",
                caption: this.translate("DESC_ALYC"),
                dataType: "string"
            },
            {
                dataField: "Cantidad",
                caption: this.translate("CANTIDAD"),
                dataType: "number"
                //visible: false,
                //format: "{ style: 'currency', currency: 'ARS', minimumFractionDigits: 2 }"
            }
        ];
    };
    FileUploaderComponent.prototype.translate = function (text) {
        return this._t.transform(text);
    };
    FileUploaderComponent.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.isLoadingResults = true;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
        }
        var uploadReq = new HttpRequest("POST", this.url, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === HttpEventType.UploadProgress)
                _this.progress = Math.round((100 * event.loaded) / event.total);
            else if (event.type === HttpEventType.Response) {
                _this.data = event.body; //JSON.stringify(event.body);
                _this.isLoadingResults = false;
            }
        });
    };
    FileUploaderComponent.prototype.getData = function () {
        return this.data.toArray();
    };
    FileUploaderComponent = __decorate([
        Component({
            selector: "app-file-uploader",
            templateUrl: "./file-uploader.component.html",
            styleUrls: ["./file-uploader.component.css"],
            providers: [TranslatePipe]
        }),
        __metadata("design:paramtypes", [HttpClient, TranslatePipe])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
export { FileUploaderComponent };
//# sourceMappingURL=file-uploader.component.js.map