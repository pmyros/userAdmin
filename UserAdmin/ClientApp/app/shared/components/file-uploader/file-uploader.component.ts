import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from "@angular/common/http";
import { TranslatePipe } from "../../../pipes/translate.pipe";

@Component({
  selector: "app-file-uploader",
  templateUrl: "./file-uploader.component.html",
  styleUrls: ["./file-uploader.component.css"],
  providers: [TranslatePipe]
})
export class FileUploaderComponent implements OnInit {
  columns: any = [];
  public progress: number;
  public data: any = [];
  isLoadingResults = false;
    private url = "https://ngnetcoreapi.azurewebsites.net/api/upload/UploadExcel";
  constructor(private http: HttpClient, private _t: TranslatePipe) {}

  ngOnInit() {
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
  }

  translate(text) {
    return this._t.transform(text);
  }

  upload(files) {
    if (files.length === 0) return;
    this.isLoadingResults = true;
    const formData = new FormData();

    for (let file of files) formData.append(file.name, file);

    const uploadReq = new HttpRequest("POST", this.url, formData, {
      reportProgress: true
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round((100 * event.loaded) / event.total);
      else if (event.type === HttpEventType.Response) {
        this.data = event.body; //JSON.stringify(event.body);
        this.isLoadingResults = false;
      }
    });
  }

  getData() {
    return this.data.toArray();
  }
}
