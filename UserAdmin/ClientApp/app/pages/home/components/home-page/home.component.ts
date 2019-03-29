import { Component, OnInit, ViewChild } from "@angular/core";
import { Widget } from "../../../../models/widget";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  widgets: Widget[] = [];
  breakpoint: number;

  constructor() {}

  ngOnInit() {
    this.setWidgets();
    this.setSize(window.innerWidth);
  }

  setWidgets() {
    this.widgets = [
      {
        instrumento: "DLR Feb 19",
        valor1: "38.710",
        valor2: "38.480",
        marca: "ROFEX",
        valor3: "0.598"
      },
      {
        instrumento: "DLR Mar 19",
        valor1: "39.990",
        valor2: "39.680",
        marca: "ROFEX",
        valor3: "0.488"
      },
      {
        instrumento: "DLR Abr 19",
        valor1: "41.650",
        valor2: "40.480",
        marca: "ROFEX",
        valor3: "0.358"
      },
      {
        instrumento: "DLR May 19",
        valor1: "42.350",
        valor2: "31.990",
        marca: "ROFEX",
        valor3: "0.456"
      },
      {
        instrumento: "DLR Jun 19",
        valor1: "43.580",
        valor2: "43.480",
        marca: "ROFEX",
        valor3: "0.698"
      },
      {
        instrumento: "DLR Jul 19",
        valor1: "44.800",
        valor2: "44.480",
        marca: "ROFEX",
        valor3: "0.298"
      },
      {
        instrumento: "DLR Ago 19",
        valor1: "46.010",
        valor2: "46.480",
        marca: "ROFEX",
        valor3: "0.898"
      },      
      {
        instrumento: "DLR Sep 19",
        valor1: "46.010",
        valor2: "47.480",
        marca: "ROFEX",
        valor3: "0.898"
      },
      {
        instrumento: "DLR Oct 19",
        valor1: "48.010",
        valor2: "46.480",
        marca: "ROFEX",
        valor3: "0.898"
      },
      {
        instrumento: "DLR Nov 19",
        valor1: "49.010",
        valor2: "46.480",
        marca: "ROFEX",
        valor3: "0.898"
      },
      {
        instrumento: "DLR Dic 19",
        valor1: "50.010",
        valor2: "46.480",
        marca: "ROFEX",
        valor3: "0.898"
      }
    ];
  }

  onResize(event) {
    this.setSize(event.target.innerWidth);
  }

  setSize(size) {
    if (size <= 1380) {
      if (size <= 675) {
        this.breakpoint = 1;
      } else if (size <= 980) {
        this.breakpoint = 2;
      } else {
        this.breakpoint = 3;
      }
    } else {
      this.breakpoint = 4;
    }
  }
}
