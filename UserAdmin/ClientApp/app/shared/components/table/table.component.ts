import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignalRService } from '../../../services/signal-r.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient,
    public signalRService: SignalRService) {}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferTableDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
      this.http.get("https://ngnetcoreapi.azurewebsites.net/api/chart/gettable").subscribe(res => {
      console.log(res);
    });
  };
}
