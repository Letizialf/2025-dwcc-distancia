function calcularDiferenzaDatas(data1, data2) {
  // Unidades de tempo en milisegundos
  let msDia = 24 * 60 * 60 * 1000;
  let msHora = 60 * 60 * 1000;
  let msMinuto = 60 * 1000;

  // Obtemos as datas en ms, por eso facemos as conversións anteriores
  let msData1 = data1.getTime();
  let msData2 = data2.getTime();

  // Calculamos a diferenza en ms entre ambas datas
  let diferenzaMs = Math.abs(msData2 - msData1);

  // Diferenza en días --> Convertemos a diferencia a días
  let diferenzaDias = Math.floor(diferenzaMs / msDia);

  // Diferenza en horas
  let diferenzaHoras = Math.floor(diferenzaMs / msHora);

  // Diferenza Minutos
  let diferenzaMinutos = Math.floor(diferenzaMs / msMinuto);
}
