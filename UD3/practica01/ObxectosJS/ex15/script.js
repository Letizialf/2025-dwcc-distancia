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

  // Diferenza en anos
  let diferenzaAnos = data2.getFullYear() - data1.getFullYear();
  // Diferenza meses
  let diferenzaMeses =
    diferenzaAnos * 12 + (data2.getMonth() - data1.getMonth());
  if (data2.getDate() < data1.getDate()) {
    diferenzaMeses--; // Axustar os meses se o día de `data2` é menor ao de `data1`;
  }

  console.log("Datas orixinais:");
  console.log("Data 1:", data1.toDateString());
  console.log("Data 2:", data2.toDateString());
  console.log("\nDiferenzas calculadas:");
  console.log(`Diferenza en días: ${diferenzaDias} días`);
  console.log(`Diferenza en horas: ${diferenzaHoras} horas`);
  console.log(`Diferenza en minutos: ${diferenzaMinutos} minutos`);
  console.log(`Diferenza en meses: ${diferenzaMeses} meses`);
  console.log(`Diferenza en anos: ${diferenzaAnos} anos`);
}

function exercicioDatas() {
  // Crear as dúas datas: 1 de xaneiro de 2022 e 16 de outubro de 2024
  let data1 = new Date("2022-01-01T00:00:00");
  let data2 = new Date("2024-10-16T00:00:00");
  // Calcular as diferenzas entre as dúas datas
  calcularDiferenzaDatas(data1, data2);
}
// Executar o exercicio
exercicioDatas();
