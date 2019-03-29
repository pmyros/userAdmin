import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { MessageService } from "primeng/api";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder
} from "@angular/forms";
import { MiembroCompensador } from "../../../../models/miembro-compensador";
import { CuentaCompensacion } from "../../../../models/cuenta-compensacion";
import { ApiService } from "../../../../services/api/api.service";
import { UsuariosService } from "../../services/usuarios.service";
import { Usuario } from "../../../../models/usuario";
import { ValidateUrl } from "../../../../shared/validators/validators";



@Component({
  selector: "app-usuario-form",
  templateUrl: "./usuario-form.component.html",
  styleUrls: ["./usuario-form.component.css"],
  providers: [MessageService]
})
export class UsuarioFormComponent implements OnInit {
  @ViewChild("stepper") stepper;
  @Output() reloadTable = new EventEmitter();
  formGroup: FormGroup;
  personalFormGroup: FormGroup;
  accountFormGroup: FormGroup;
  isLinear = true;
  usr: Usuario;
  selectedMC: any;
  selectedCIM: any;
  unamePattern = "[a-zA-Z][a-zA-Z0-9-_]{3,32}";

  get formArray(): AbstractControl | null {
    return this.formGroup.get("formArray");
  }

  mcs: MiembroCompensador[] = [];
  selectedCims: CuentaCompensacion[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _api: ApiService,
    private _usrService: UsuariosService,
    private _msgService: MessageService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.fillMcs();
  }
  buildForm() {
    this.personalFormGroup = this._formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      url: ["", [Validators.required, ValidateUrl]]
    });

    this.accountFormGroup = this._formBuilder.group({
      mc: ["", Validators.required],
      cim: ["", Validators.required]
    }); 
  }

  fillMcs() {
    this._api.getMiembrosCompensadores().subscribe(res => {
      this.mcs = res;
    });
  }

  mcChanged(mc) {
    let target = mc.source.selected._element.nativeElement;
    this.selectedMC = {
      value: mc.value,
      text: target.innerText.trim()
    };

    this._api.getCuentasCompensacionByMC(mc.value).subscribe(res => {
      this.selectedCims = res;
    });
  }

  cimChanged(cim) {
    let target = cim.source.selected._element.nativeElement;
    this.selectedCIM = {
      value: cim.value,
      text: target.innerText.trim()
    };
  }

  submit() {
    const nombre = this.personalFormGroup.value.name;
    const email = this.personalFormGroup.value.email;
    const mc = this.accountFormGroup.value.mc;
    const cim = this.accountFormGroup.value.cim;

    this.usr = { nombre: nombre, email: email, mc: mc, cim: cim };

    this._usrService.create(this.usr).subscribe(res => {
      this.resetControls();
      this._msgService.add({
        severity: "success",
        summary: "Usuario creado!",
        detail: "Via MessageService"
      });
      this.reloadTable.emit(true);
    });
  }

  resetControls() {
    this.accountFormGroup.reset();
    this.personalFormGroup.reset();
    this.stepper.reset();
  }
}
