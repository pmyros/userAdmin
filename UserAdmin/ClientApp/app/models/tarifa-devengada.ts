import { Base } from "./base";
import * as moment from 'moment'

export interface TarifaDevengada extends Base {
  TarifaDevengadaId: number;
  ComisionId: number;
  ComisionDetalle: string;
  MiembroCompensadorId: number;
  MiembroCompensadorCodigo: string;
  MiembroCompensadorDescripcion: string;
  CuentaFacturacionId: number;
  CuentaFacturacionCodigo: string;
  CuentaFacturacionDescripcion: string;
  CuentaRegistroId: number;
  CuentaRegistroCodigo: string;
  CuentaRegistroDescripcion: string;
  CuentaCompensacionId: number;
  CuentaCompensacionCodigo: string;
  CuentaCompensacionDescripcion: string;
  ContratoId: number;
  ContratoDescripcion: string;
  ProductoId: number;
  ProductoAlias: string;
  ProductoDescripcion: string;
  TipoRuedaId: any;
  TipoRuedaDescripcion: string;
  EjecucionId: any;
  EjecucionDescripcion: string;
  TipoOrdenId: any;
  TipoOrdenDescripcion: string;
  Cantidad: number;
  MonedaId: number;
  MonedaDescripcion: string;
  MonedaCodigoIso: string;
  Fecha: moment.Moment;
  Total: number;
  OperacionCarteraId: number;
  OperacionCarteraNumero: number;
  TarifaId: number;
  EntidadId: number;
  EntidadDescripcion: string;
  EsFacturable: boolean;
  Cotizacion: number;
  TotalMonedaBase: number;
}
