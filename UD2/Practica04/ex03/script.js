/**
        * Calcula todas as datas de lúa chea no ano 2021
        * @returns {Array<Date>} Array coas datas das lúas cheas do ano 2021
        */
function calculoLuas() {
    const diaChea = document.getElementById('diachea').value; // "30/12/2020"
    const horaChea = document.getElementById('horachea').value; // "04:30:00"

    //TODO: A realizar polo alumno/a a partir de aquí
    return luas2021;
}

/**
 * Mostra na páxina as datas das lúas cheas nunha táboa
 * @param {Array<Date>} luas - Array coas datas das lúas cheas a mostrar
 */
function mostrarLuas(luas) {
    const div = document.getElementById('resultado');

    // Número de meses lunares
    div.innerHTML = `<p>O ano 2021 ten ${luas.length} meses lunares.</p>`;

    // Crear táboa
    let html = '<table border="1" cellpadding="5"><tr><th>Lúa Chea</th></tr>';
    luas.forEach(lua => {
        const dia = String(lua.getDate()).padStart(2, '0');
        const mes = String(lua.getMonth() + 1).padStart(2, '0');
        const ano = lua.getFullYear();
        const hora = String(lua.getHours()).padStart(2, '0');
        const minuto = String(lua.getMinutes()).padStart(2, '0');
        const segundo = String(lua.getSeconds()).padStart(2, '0');

        html += `<tr><td>${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}</td></tr>`;
    });
    html += '</table>';

    div.innerHTML += html;
}

// Executamos as funcións
const luas = calculoLuas();
mostrarLuas(luas);