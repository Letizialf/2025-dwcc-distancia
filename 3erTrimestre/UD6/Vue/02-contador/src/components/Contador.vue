<template>
  <div>
    <!-- Amosamos o valor do contador -->
    <h1>Contador: {{ contador }}</h1>

    <!-- Un botón para incrementar o valor do contador -->
    <button @click="incrementar">Incrementar</button>

    <!-- Botón para reiniciar o contador ao valor por defecto -->
    <button @click="reiniciarContador">Reiniciar contador</button>

    <!-- Uso da Propiedade Computada -->
    <p>O contador é {{ parOuImpar }}</p>

    <!-- Resultado do watcher -->
    <p>{{ mensaxe }}</p>
  </div>
</template>
<script>
export default {
  name: "Contador", //Definimos con qué nome imos importar o compoñente en App.vue
  props: {
    // O nome da propiedade é inicial
    inicial: {
      type: Number, //O tipo de dato da propiedade é Number
      default: 0, //O valor por defecto da propiedade é 0
    },
  },
  data() {
    return {
      contador: this.inicial, //Creamos a variable e asignamos que o valor sexa sempre 0 ata que o usuario o modifique
      mensaxe: "",
    };
  },

  methods: {
    incrementar() {
      this.contador++;
    },
    reiniciarContador() {
      this.contador = this.inicial; //Volvemos a asignar o valor por defecto
    },
  },
  // Unhha propiedade que é resultado dun cálculo
  computed: {
    parOuImpar() {
      return this.contador % 2 === 0 ? "Par" : "Impar";
    },
  },

  // Esto observa cambios no contador e actualiza a propiedade mensaxe EN FUNCIÓN dos cambios do contador.
  // Ten que levar o mesmo nome que a propiedade que se quere observar
  watch: {
    contador(novo, vello) {
      this.mensaxe = `O contador cambiou de ${vello} a ${novo}`;
    },
  },

  // Ganchos sobre o ciclo de vida do compoñente
  mounted() {
    console.log("O compoñente foi montado con éxito");
  },
  unmounted() {
    console.log("O compoñente foi desmontado");
  },
};
</script>
<style scoped>
h1 {
  color: #42b983;
}

button {
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2c7a73;
}
</style>
