/**
 * MÓDULOS
 *
 * Un módulo é un arquivo que contén código reutilizable:
 *  - funcións
 *  - clases
 *  - variables
 * que pode ser importado e utilizado por outros arquivos.
 *
 * A sua principal ventaxa é mellorar a organización do código e permitir o seu uso en diferentes partes dun proxecto ou mesmo en diferentes proxectos.
 *
 * A partir de ES6 (ECMAScript6) JS incorporou o concepto de módulos de forma nativa, permitindo importar e exportar código entre diferentes arquivos.
 *
 * Para utilizalos nun entorno web, necesitamos indicar explicitamente que o script que estamos utilizando é un módulo: ---- scr: script.js type: module
 */

// A declaración EXPORT utilízase ao crear módulos de JS para exportar funcións, obs. ou tipos de datos primitivos do módulo para que poidan ser utilizados por outros programas coa sentencia IMPORT.

// Os módulos exportados están en strict mode

/** Hai 2 formas de exportar elementos en JS:
 *
 * - EXPORTACIÓN NOMEADA: Permite exportar múltiples elementos dun módulo de forma EXPLÍCITA
 *      //arquivo miModulo.js
 *      export const nome = 'Juan';
 *      export function saudar(){
 *          console.log('Ola, ' + nome);
 *      }
 *
 * -
 */
