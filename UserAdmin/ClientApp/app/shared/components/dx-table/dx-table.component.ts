import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { locale, loadMessages } from "devextreme/localization";

import * as esMessages from "../../../../assets/i18n/devexpress/es";

@Component({
  selector: "app-dx-table",
  templateUrl: "./dx-table.component.html",
  styleUrls: ["./dx-table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DxTableComponent implements OnInit {
  @ViewChild("grid") dataGrid: DxDataGridComponent;
  @Input() columns: any;
  @Input() datasource: any;
  @Input() filename: any;
  @Output() rowDeleted = new EventEmitter();
  events: Array<string> = [];
  constructor() {
    const lang = sessionStorage.getItem("LANG");
    if (lang != "en") loadMessages(esMessages);
    locale(lang);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  onRowRemoving(event) {
    console.log(event);
  }

  onRowRemoved(event) {    
    this.rowDeleted.emit(event.data);
  }


  clearEvents() {
    this.events = [];
  }
}
