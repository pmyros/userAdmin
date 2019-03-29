import { MiembroCompensador } from "./miembro-compensador";
import { CuentaCompensacion } from "./cuenta-compensacion";

export interface Usuario {
  nombre: string;
  email: string;
  mc: string;
  cim: string;
  // mc: MiembroCompensador;
  // cim: CuentaCompensacion;
}
