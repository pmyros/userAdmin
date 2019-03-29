import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { MiembroCompensador } from "../../../../models/miembro-compensador";

@Component({
  selector: "app-tarifa-devengada-form",
  templateUrl: "./tarifa-devengada-form.component.html",
  styleUrls: ["./tarifa-devengada-form.component.css"]
})
export class TarifaDevengadaFormComponent implements OnInit {
  @Input() mcs: MiembroCompensador[];
  @Output() selectedMC = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    mc: new FormControl("", Validators.required)
  });
  constructor() {}

  ngOnInit() {} 

  selectMC(all) {    
    if(all)
    {      
      this.selectedMC.emit('0');
      this.form.reset();
    }
    else{
      this.selectedMC.emit(this.form.value.mc);
    }

  }  
}
