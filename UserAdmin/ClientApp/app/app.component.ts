import { Component, OnInit } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

import { Message } from "primeng/api";
//import { SignalRService } from "./services/signal-r.service";
//import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  msgs: Message[] = [];

  title = "Bienvenido a AP6";
  subtitle = "Anywhere Portforlio";

  constructor() {}

  ngOnInit() {
  
  } 
}
