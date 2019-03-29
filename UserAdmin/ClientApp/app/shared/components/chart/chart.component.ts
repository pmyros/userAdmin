import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignalRService } from "../../../services/signal-r.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  public chartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public chartLabels: string[] = ["Cantidad de consultas de usuarios a AP6"];
  public chartType: string = "bar";
  public chartLegend: boolean = true;
  public colors: any[] = [
    { backgroundColor: "#5491DA" },
    { backgroundColor: "#E74C3C" },
    { backgroundColor: "#82E0AA" },
    { backgroundColor: "#E5E7E9" }
  ];

  constructor(private http: HttpClient,
    public signalRService: SignalRService) {}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
      this.http.get("https://ngnetcoreapi.azurewebsites.net/api/chart/getchart").subscribe(res => {
      console.log(res);
    });
  };
}
