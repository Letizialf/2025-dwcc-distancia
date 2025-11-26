function bisesto(ano) {
    //TODO: a realizar polo alumno

    return null ; //retornar o valor correcto
}

function comprobarAno() {
    const ano = document.getElementById("anoInput").value;
    const resultado = document.getElementById("resultado");

    if (ano === "") {
        resultado.textContent = "Por favor, introduce un ano válido.";
        return;
    }

    const eBisesto = bisesto(Number(ano));

    if (eBisesto) {
        resultado.textContent = `O ano ${ano} é bisesto.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `O ano ${ano} non é bisesto.`;
        resultado.style.color = "red";
    }
}




//==================================
// Script para automatizar probas.
//==================================
function executarProbas() {
    const probas = [
        { ano: 2020, esperado: true },
        { ano: 1900, esperado: false },
        { ano: 2000, esperado: true },
        { ano: 2021, esperado: false },
        { ano: 1600, esperado: true },
        { ano: 1700, esperado: false },
        { ano: 2024, esperado: true } ,
        { ano: 1804, esperado: true } , 
        { ano: 1804, esperado: true } , 
        { ano: 1808, esperado: true } , 
        { ano: 1812, esperado: true } , 
        { ano: 2000, esperado: true } , 
        { ano: 1996, esperado: true } , 
        { ano: 1992, esperado: true } ,
        { ano: 2096, esperado: true } , 
        { ano: 2056, esperado: true } 
    ];

    let exitos = 0;

    probas.forEach(proba => {
        const resultado = bisesto(proba.ano);
        if (resultado === proba.esperado) {
            console.log(`✔️ Proba correcta para o ano ${proba.ano}`);
            exitos++;
        } else {
            console.error(`❌ Proba fallada para o ano ${proba.ano}. Esperado: ${proba.esperado}, obtido: ${resultado}`);
        }
    });

    console.log(`Probas superadas: ${exitos}/${probas.length}`);
}