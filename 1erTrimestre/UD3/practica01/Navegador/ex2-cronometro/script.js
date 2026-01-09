let IntervalId = null;
let contador = 0;

function saludar() {
  IntervalId = setInterval(() => {
    contador += 1;
    if (contador <= 3) {
      alert("Hola bos días");
    } else {
      console.log("Se va a parar la ejecución...");
      clearInterval(IntervalId);
    }
  }, 5000);
}

saludar();
