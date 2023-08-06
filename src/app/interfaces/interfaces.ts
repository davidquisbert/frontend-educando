export interface RespuestaApi<T> {
  codigo?: number;
  fechaHora?: string;
  mensaje?: string;
  data?: T;
}
