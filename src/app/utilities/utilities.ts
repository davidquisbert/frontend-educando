export function formatFecha(fecha: string): string {
  const partes: string[] = fecha.split('T')[0].split('-');
  const dia: string = partes[2];
  const mes: string = partes[1];
  const anio: string = partes[0];

  return `${dia}/${mes}/${anio}`;
}
