import { Injectable } from "@angular/core";
import * as signalR from "@aspnet/signalr";
import { Chart } from "../models/chart";
import { Message } from "primeng/api";
import { TableData } from "../models/tableData";

@Injectable({
  providedIn: "root"
})
export class SignalRService {
  public data: Chart[];
  public tableData: TableData[];
  public msgs: Message[] = [];

  private hubConnection: signalR.HubConnection;
  private messagesHubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl("https://ngnetcoreapi.azurewebsites.net/chart")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log("Connection started"))
      .catch(err => console.log("Error while starting connection: " + err));
  };

  public startMessageConnection = () => {
    this.messagesHubConnection = new signalR.HubConnectionBuilder()
        .withUrl("https://ngnetcoreapi.azurewebsites.net/notify")
      .build();

    this.messagesHubConnection
      .start()
      .then(() => console.log("Connection notify started"))
      .catch(err => console.log("Error while starting connection: " + err));
  };

  public addTransferChartDataListener = () => {
    this.hubConnection.on("transferchartdata", data => {
      this.data = data; 
    });
  };

  public addTransferTableDataListener = () => {
    this.hubConnection.on("transfertabledata", data => {
      this.tableData = data; 
    });
  };

  public startListeningMessages = () => {
    this.messagesHubConnection.on(
      "BroadcastMessage",
      (type: string, payload: string) => {
        console.log(type);
        this.msgs.push({ severity: type, summary: payload });
      }
    );
  };  
}
