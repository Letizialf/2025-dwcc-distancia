function monthsInterval(dataInicio, dataFin) {
  //   Manexo de erros
  if (!(dataInicio instanceof Date) || !(dataFin instanceof Date)) {
    throw new Error("Erro, unha das datas non é válida");
  }
  if (dataInicio > dataFin) {
    throw new Error(
      "Erro, a data de inicio ten que ser ANTERIOR á data de fin"
    );
  }

  const listadoMeses = [
    "Xaneiro",
    "Febreiro",
    "Marzo",
    "Abril",
    "Maio",
    "Xuño",
    "Xullo",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Decembro",
  ]; //Array coas cadeas dos meses en galego.

  //TODO: Implementar a función e o valor retornado.
  let resultado = [];
  let currentDate = new Date(dataInicio); //Copiamos porque para traballar con datas é o mellor, así evitamos erros

  // Comparamos o mes e o ano das datas para que, ata que coincidan os meses non acabe o bucle
  while (
    currentDate <= dataFin ||
    (currentDate.getFullYear() === dataFin.getFullYear() &&
      currentDate.getMonth() <= dataFin.getMonth())
  ) {
    //   Metemos no array resultado o mes (nome) correspondente ó mes da data de Inicio
    resultado.push(listadoMeses[currentDate.getMonth()]);
    //   Incrementamos o valor numérico do mes actual en cada iteración ata que o mes sexa igual ao mes de fin
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  return resultado;
}

let data1 = new Date(2023, 0, 1);
let data2 = new Date(2023, 5, 1);

let data3 = new Date(2025, 4, 6);
let data4 = new Date(2024, 8, 7);
// Exemplos de uso

console.log(monthsInterval(data1, data2));
console.log(monthsInterval(data2, data3));
console.log(monthsInterval(data2, data4));
console.log(monthsInterval(data4, data2));
console.log(monthsInterval(data1));
