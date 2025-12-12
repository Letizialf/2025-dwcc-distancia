

const segundosInput = document.getElementById('segundos'); // input de duración en segundos
const tempoEl = document.getElementById('tempo'); // elemento que amosa o tempo
const mensaxesEl = document.getElementById('mensaxes'); // elemento para mensaxes accesibles
const btnStart = document.getElementById('btnStart');   // botón para iniciar
const btnStop = document.getElementById('btnStop');     // botón para parar

let intervalId = null; // identifica o setInterval activo
let remaining = 0;     // segundos restantes

/**
 * showMessage(msg: string): void
 * Amosa unha mensaxe accesible na interface.
 * Para mostrar as mensaxes: Conta atrás en marcha, Tempo rematado, Cronómetro detido, etc.
 */
function showMessage(msg){ mensaxesEl.textContent = msg || ''; }

/**
 * formatMMSS(total: number): string
 * Converte segundos totais en formato "mm:ss" (sempre con 2 díxitos).
 */
function formatMMSS(total){
   //TODO: a implementar polo alumnado. 
  return  null;
}

/**
 * readDuration(): number
 * Le a duración do input (segundos).
 * Se o valor non é numérico ou é negativo, devolve 10 segundos por defecto.
 */
function readDuration(){
 //TODO a implementar polo alumnado.
  
  return val;
}

/**
 * updateTimeUI(): void
 * Actualiza na pantalla o tempo restante usando o formato mm:ss.
 */
function updateTimeUI(){ tempoEl.textContent = formatMMSS(remaining); }

/**
 * start(): void
 * Inicia a conta atrás se non hai outra xa en marcha.
 */
function start(){
//TODO a implementar polo alumnado.
}

/**
 * stop(): void
 * Detén a conta atrás, pon 00:00 e amosa unha mensaxe.
 */
function stop(){
   //TODO: a completar polo alumnado. Para deter a conta atrás e poñer remaining a 0.
  updateTimeUI();
  showMessage('Cronómetro detido');
}

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);

// Estado inicial
remaining = 0; 
updateTimeUI(); 
showMessage('');


